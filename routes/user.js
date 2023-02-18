const express = require('express')
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage 
router.get('/login', (req, res, next) => {
    res.send(`<html><form action="/username" method="POST"><input type="text" name="username" required><button type="submit">submit</button></form></html>`)
})

router.post('/username', (req, res, next) => {
    console.log(JSON.parse(JSON.stringify(req.body)));
    let user = JSON.parse(JSON.stringify(req.body))
    console.log(user.username)
    let localStorage = new LocalStorage('./scratch');
    localStorage.setItem('username', user.username)
    console.log(localStorage.getItem('username'))
    res.redirect('/');
})

module.exports = router;