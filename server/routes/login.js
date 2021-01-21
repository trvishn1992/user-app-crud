const MongoDB = require('mongodb');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const payload = req.body;
        const Database = await getDBCollection();
        const response = await Database.findOne(payload);
        console.log('Payload-- ', payload, 'Response-- ', response);
        if (response && response.email === payload.email && response.password === payload.password)
            res.status(200).send();
        else
            res.status(401).send();
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
