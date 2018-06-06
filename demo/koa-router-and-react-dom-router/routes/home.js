const Router = require('koa-router');

// 子路由1：主页
let routerHome = new Router();
routerHome.get('/', async (ctx) => {
    console.log(ctx.request.ip);
    let html = `
        欢迎大佬！！
        <a href="/mongo">进入mongo数据库</a>
        <a href="/react-blog">进入我的博客</a>
    `;
    ctx.type = 'html';
    ctx.body = html;
})

module.exports = routerHome;

