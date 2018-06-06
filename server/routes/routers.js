const Router = require('koa-router');
const routerHome = require('./home');
const routerBlog = require('./blog');
const routerUser = require('./user');
const routerStatic = require('./static');

let router = new Router();

router.use('/', routerHome.routes(), routerHome.allowedMethods());
router.use('/api/blog', routerBlog.routes(), routerBlog.allowedMethods());
router.use('/api/user', routerUser.routes(), routerUser.allowedMethods());
router.use('/react-blog', routerStatic.routes(), routerStatic.allowedMethods());

router.all('404', '*', ctx => {
  ctx.status = 404
  ctx.body = '404~~~~~~页面被猫吃掉啦！~~~~~~~~'
})

module.exports = router;














