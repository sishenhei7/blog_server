const Router = require('koa-router');
const creates = require('./../controllers/create');
const retrieves = require('./../controllers/retrieve');
const updates = require('./../controllers/update');
const deletes = require('./../controllers/delete');

// 子路由2：mongodb数据库
let routerMongo = new Router();
routerMongo.
  get('/', retrieves.getAll).
  get('/create', creates.html).
  post('/create', creates.create).
  get('/delete', deletes.input).
  post('/delete', deletes.delete).
  post('/find', retrieves.find).
  post('/update', updates.update);


module.exports = routerMongo;
