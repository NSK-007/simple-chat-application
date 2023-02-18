const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.listen(8080);
const userRouter = require('./routes/user');
const chatRouter = require('./routes/chat');

app.use(userRouter);
app.use(chatRouter);
