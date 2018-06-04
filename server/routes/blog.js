const Router = require('koa-router');
const BlogController = require('./../controllers/blog.controller');

// 子路由：blog
let routerBlog = new Router();
routerBlog.
  get('/', BlogController.getAll).
  post('/', BlogController.createOne);


module.exports = routerBlog;
