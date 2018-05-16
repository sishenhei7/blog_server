const Router = require('koa-router');

// 子路由1：主页
let routerBlog = new Router();
routerBlog.get('*', async (ctx) => {
    ctx.redirect('/build/index.html');
})

module.exports = routerBlog;
