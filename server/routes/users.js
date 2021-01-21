const MongoDB = require('mongodb');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const Database = await getDBCollection();
        const data = await Database.find({}, {_id: 0}).toArray();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
    }
});

router.put('/', async (req, res) => {
    try {
        const Database = await getDBCollection();
        const response = await Database.findOneAndUpdate({name: req.body.name}, {$set: {password: req.body.password}});
        console.log('Response from service', response);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:name', async (req, res) => {
    try {
        const Database = await getDBCollection();
        const response = await Database.findOneAndDelete({name: req.params.name});
        console.log('Response from service', response);
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
    }
});

async function getDBCollection() {
    try {
        const client = await MongoDB.MongoClient.connect(
            'mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client.db('user-app').collection('users');
    } catch (err) {
        console.log(err);
    }
}

module.exports = router;