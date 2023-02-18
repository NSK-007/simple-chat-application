const express = require('express')
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<html><form action="/" method="POST"><input type="text" name="username"><button type="submit">submit</button></form></html>`)
})

router.post('/', (req, res, next) => {
    console.log(JSON.parse(JSON.stringify(req.body)));
    let chat = '';
    res.send(`<html>${chat}</html>`)
})

module.exports = router;