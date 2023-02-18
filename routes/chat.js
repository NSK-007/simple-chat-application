const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res, next) => {
    let chat = JSON.parse(JSON.stringify(req.body))
    console.log(chat)
    // fs.appendFileSync('message.txt')
})

router.get('/', (req, res, next) => {
    let chat = 'No Chat exists';
    chat = fs.readFileSync('message.txt');
    console.log(chat);
    res.send(`<html><div>${chat}</div><form action="/" method="POST"><input type="text" name="message" required><button type="submit">send</button></form></html>`)
})

module.exports = router;