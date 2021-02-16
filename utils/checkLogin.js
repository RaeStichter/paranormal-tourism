// express middleware to check if client is logged in
const loggedIn = (req, res, next) =>
{
 if (!req.session || !req.session.user_id) return res.status(401).end();
 else next();
};

module.exports = loggedIn;
