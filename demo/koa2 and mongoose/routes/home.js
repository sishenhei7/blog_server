const Router = require('koa-router');

// 子路由1：主页
let routerHome = new Router();
routerHome.get('/', async (ctx) => {
    let html = `
      欢迎大佬！！<a href="/mongo">进入mongo数据库</a>
    `;
    ctx.type = 'html';
    ctx.body = html;
})

module.exports = routerHome;

