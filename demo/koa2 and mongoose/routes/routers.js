const Router = require('koa-router');
const routerHome = require('./home');
const routerMongo = require('./mongo');

let router = new Router();
router.use('/', routerHome.routes(), routerHome.allowedMethods());
router.use('/mongo', routerMongo.routes(), routerMongo.allowedMethods());

module.exports = router;














