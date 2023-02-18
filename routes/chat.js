const express = require('express');
const router = express.Router();
// const LocalStorage = require('node-localstorage').LocalStorage 
const fs = require('fs');
// let localStorage = new LocalStorage('./scratch');
// let username = localStorage.getItem('username')

router.post('/', (req, res, next) => {
    let chat = JSON.parse(JSON.stringify(req.body))
    console.log(chat)
    if(chat.username!=undefined && chat.message!=undefined)
        fs.appendFileSync('message.txt', chat.username+":"+chat.message+"||");
    res.redirect('/');
})


router.get('/', (req, res, next) => {
    let chat = fs.readFileSync('message.txt', 'utf8');
    console.log('get msg'+chat)
    if(chat==='')
        chat = 'No chat exists'
    res.send(`<html><div>${chat}</div><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input type="text" id="message" name="message" required> 
    <input name="username" type="hidden"  id="username"> 
    <button type="submit">send</button></form></html>`)
})
module.exports = router;