var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//路由页面查找
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var logoInRouter = require('./routes/logoIn');
var app = express();
var http = require('http');
var server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源
app.use(express.static(path.join(__dirname, 'public')));
// post请求
app.use(bodyParser.urlencoded({extended:true}))
//路由
app.use('/index', indexRouter); 
app.use('/users', usersRouter);
app.use('/logoin', logoInRouter);
server.listen('3004'); 
