const Router = require('koa-router');
const routerHome = require('./home');
const routerBlog = require('./blog');
const routerUser = require('./user');
const routerStatic = require('./static');

let router = new Router();
router.use('/', routerHome.routes(), routerHome.allowedMethods());
router.use('/blog', routerBlog.routes(), routerBlog.allowedMethods());
router.use('/user', routerUser.routes(), routerUser.allowedMethods());
router.use('/react-blog', routerStatic.routes(), routerStatic.allowedMethods());

module.exports = router;














