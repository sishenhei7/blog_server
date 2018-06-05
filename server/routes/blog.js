const Router = require('koa-router');
const BlogController = require('./../controllers/blog.controller');

// 子路由：blog
let routerBlog = new Router();
routerBlog.
  get('/', BlogController.getAll).
  post('/', BlogController.createOne).
  get('/:id/addhits', BlogController.addHits).
  get('/:id', BlogController.getById).
  del('/:id', BlogController.delById).
  put('/:id/edit', BlogController.updateById).
  get('/tags', BlogController.getTags).
  put('/:id/sticky', BlogController.setSticky).
  put('/:id/unsticky', BlogController.cancelSticky);

module.exports = routerBlog;
