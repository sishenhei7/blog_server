'use strict'
const Koa = require('koa');
const logger = require('koa-logger');
const router = require('./server/routes/routers');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');
const cors = require('@koa/cors');
// const session = require('koa-session');
// const sessionConfig = require('./config/session');
// const passport = require('koa-passport');

//连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const app = new Koa();
const PORT = process.env.PORT || 3000;

// sessions
// app.keys = sessionConfig.keys;
// app.use(session(app));

// logger
app.use(logger());

//cors
app.use(cors());

// bodyParser
app.use(bodyParser());

// passport
// app.use(passport.initialize())
// app.use(passport.session())

// koaStatic
app.use(koaStatic(
  path.join(__dirname, './static')
));

// routes
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`koa starts at port: ${PORT}!`);
})










