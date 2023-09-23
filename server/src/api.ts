import express from 'express';

let router = express.Router()

router.get('/', function (req, res) {
    res.send("This is where the APIs will be");
})

export default router;
