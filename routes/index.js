const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello world')});

router.get('/users', require('./users'));

module.exports = router;