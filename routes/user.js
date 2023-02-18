const express = require('express')
const router = express.Router();
router.get('/login', (req, res, next) => {
    res.send('<form action="/" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" method="POST"><input id="username" type="text" name"title"><button type="submit">add User</button></form>')
    console.log(req.body.username);
})



module.exports = router;