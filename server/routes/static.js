const Router = require('koa-router');

// 子路由：blog
let routerStatic = new Router();
routerStatic.get('*', async (ctx) => {
    ctx.redirect('/build/index.html');
})


module.exports = routerStatic;
