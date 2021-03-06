// ------------------------- SETUP -------------------------
require('dotenv').config(); // for process.env.DEFAULT_PORT
// Dependencies
const express = require('express');
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({});
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
const sequelize = require('./config/connection');
const routes = require('./controllers');
//import for session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Create an instance of the express app.
const app = express();
// Set port for connection
const PORT = process.env.PORT || process.env.DEFAULT_PORT || 3001; // deployment environment || local environment .env || default 3001

// Added so body parser can handle post requests.
// If we didn't have this the body would come back as undefined
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Host static Asset files so Public css and js files can be retrieved by client
app.use(express.static(path.join(__dirname, '/public/assets')));

// create a session
app.use(session(sess));

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ deafaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use our routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
// If we want to hard reset the database, set "RESET_DB"="1" in <installationDirectory>/.env
if (process.env.RESET_DB === "1")
{
  sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
  .then(() =>
  {
    sequelize.sync({ force: true }).then(() =>
    {
      app.listen(PORT, () => console.log(`Reset DB\n Server listening on port ${PORT}!`));
    });
  })
  .catch((err) => { console.log(err); });
}
// Otherwise just start the server
else
{
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
  });
}
