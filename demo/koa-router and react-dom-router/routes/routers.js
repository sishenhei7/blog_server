const Router = require('koa-router');
const routerHome = require('./home');
const routerMongo = require('./mongo');
const routerBlog = require('./blog');

let router = new Router();
router.use('/', routerHome.routes(), routerHome.allowedMethods());
router.use('/mongo', routerMongo.routes(), routerMongo.allowedMethods());
router.use('/react-blog', routerBlog.routes(), routerBlog.allowedMethods());

module.exports = router;














