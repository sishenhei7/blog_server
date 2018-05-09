'use strict'
const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const cors = require('@koa/cors');
const fs = require('fs');
const YAML = require('yamljs');

const app = new Koa();

app.use(logger());

app.use(cors());

// 子路由1：主页
let routerHome = new Router();
routerHome.get('/', async (ctx) => {
    ctx.body = '欢迎欢迎！';
})

// 子路由2：jsonp api
let routerJsonp = new Router();
routerJsonp.get('/data1', async (ctx) => {
    let cb = ctx.request.query.callback;
    ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(YAML.parse(fs.readFileSync('./jsonp.data1.yaml').toString())) + ')';
}).post('/data1', async (ctx) => {
    let cb = ctx.request.query.callback;
    ctx.type = 'text';
    ctx.body = cb + '(' + JSON.stringify(YAML.parse(fs.readFileSync('./jsonp.data1.yaml').toString())) + ')';
})

// 子路由3：restful api
let routerRest = new Router();
routerRest.get('/data1', async (ctx) => {
    ctx.body = YAML.parse(fs.readFileSync('./restful.data1.yaml').toString());
}).post('/data1', async (ctx) => {
    ctx.body = YAML.parse(fs.readFileSync('./restful.data1.yaml').toString());
})

// 装载所有路由
let router = new Router();
router.use('/', routerHome.routes(), routerHome.allowedMethods());
router.use('/jsonp', routerJsonp.routes(), routerJsonp.allowedMethods());
router.use('/restful', routerRest.routes(), routerRest.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('koa starts at port 3000!');
})


