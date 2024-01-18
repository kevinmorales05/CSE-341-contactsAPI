const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello world')});

router.get('/users', require('./users'));
router.get('/allUsers', require('./allUsers'));

module.exports = router;