const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    console.log('getAll');
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    //const result = await mongodb.getDatabase().db().collection('users').find();
    //console.log('these are the results ', result);
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
}

const getSingle = async (req, res) => {
    console.log('get single')
    console.log('from params ', req.query.id);
    const userId = new ObjectId(req.query.id);
    console.log(userId);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: userId });
    //const result = await mongodb.getDatabase().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });

}

module.exports = {
    getAll, 
    getSingle
}