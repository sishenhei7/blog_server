const Router = require('koa-router');

// 子路由1：主页
let routerHome = new Router();
routerHome.get('/', async (ctx) => {
    ctx.redirect('/build/index.html');
})

module.exports = routerHome;

