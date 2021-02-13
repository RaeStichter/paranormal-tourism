const router = require('express').Router();
const { User } = require('../../models');
const uniqid = require('uniqid');

// Get api/user
router.get('/', (req,res) => {
    User.findAll({
        attributes: { exclude: 'passhash' }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Get api/user/:id
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: 'passhash' },
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'User not found' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST api/user
router.post('/', (req,res) => {
    User.create({
        id: uniqid(),
        username: req.body.username,
        email: req.body.email,
        passhash: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json(dbUserData);
        });
      })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user login
router.post('/login', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({ message: 'User not found' })
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.passhash);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json({ user: dbUserData, message: 'You are now logged in' });
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST user/logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            console.log('session ended')
            res.status(204).end;
        })
    }
    else {
        res.status(404).end;
    }
});


// PUT update user
router.put('/:id', (req,res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(400).json({ message: 'User not found' })
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE user
router.delete('/:id', (req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({ message: 'User not found' })
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;
