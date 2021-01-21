const MongoDB = require('mongodb');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log('Params--', req.body);
        const Database = await getDBCollection();
        await Database.insertOne(req.body);
        res.status(201).send();
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