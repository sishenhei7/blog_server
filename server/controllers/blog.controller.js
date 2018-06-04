const Blog = require('./../models/blog');
const BlogController = {};
let blogId = 1;

BlogController.getAll = async ctx => {
  const blogs = await Blog.find();
  ctx.type = 'json';
  ctx.body = blogs;
}

BlogController.createOne = async ctx => {
  const blog = ctx.request.body;
  await Blog.create({
    'id': blogId++,
    'sticky': !!blog.sticky,
    'title': blog.title,
    'catagory': blog.catagory || 'frontEnd',
    'tag': blog.tag,
    'content': blog.content
  })
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '写入博客成功！'
  };
}


module.exports = BlogController;

