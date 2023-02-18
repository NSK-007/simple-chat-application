const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let chat = 'No Chat exists';
    res.send(`<html><div>${chat}</div><form action="/" method="POST"><input type="text" name="message" required><button type="submit">send</button></form></html>`)
})

module.exports = router;