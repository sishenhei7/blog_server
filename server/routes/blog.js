const Router = require('koa-router');
const BlogController = require('./../controllers/blog.controller');

// 子路由：blog
let routerBlog = new Router();
routerBlog.
  get('/', BlogController.getAll).
  post('/', BlogController.createOne).
  get('/tags', BlogController.getTags).
  get('/:id', BlogController.getById).
  del('/:id', BlogController.delById).
  get('/:id/addhits', BlogController.addHits).
  put('/:id/edit', BlogController.updateById).
  put('/:id/sticky', BlogController.setSticky).
  put('/:id/unsticky', BlogController.cancelSticky);

module.exports = routerBlog;
