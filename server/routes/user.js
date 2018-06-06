const Router = require('koa-router');
const UserController = require('./../controllers/user.controller');

// 子路由：user
let routerUser = new Router();
routerUser.
  post('/', UserController.createOne).
  post('/users', UserController.getAll).
  post('/admin', UserController.createAdmin).
  post('/login', UserController.isUser).
  get('/names', UserController.getNames).
  post('/password/edit', UserController.alterPassword).
  post('/:id', UserController.getById).
  post('/:id/del', UserController.delById);

module.exports = routerUser;
