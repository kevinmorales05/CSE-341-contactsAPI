const express = require('express');
const router = require('express').Router();

const usersController = require('../controllers/users');

router.get('/:all', usersController.getAll);



module.exports = router;
