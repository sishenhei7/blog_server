'use strict'
const Koa = require('koa');
const logger = require('koa-logger');
const router = require('./server/routes/routers');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');

//连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const app = new Koa();

app.use(logger());

//bodyParser
app.use(bodyParser());

//koaStatic
app.use(koaStatic(
    path.join(__dirname, './static')
));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa starts at port 3000!');
})










