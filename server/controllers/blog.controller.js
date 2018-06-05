const Blog = require('./../models/blog');
const BlogController = {};
let blogId = 1;

//取所有博客
BlogController.getAll = async ctx => {
  const blogs = await Blog.find();
  ctx.type = 'json';
  ctx.body = blogs;
}

//建立一个博客
BlogController.createOne = async ctx => {
  const blog = ctx.request.body;
  await Blog.create({
    'id': blogId++,
    'sticky': !!blog.sticky,
    'title': blog.title,
    'catagory': blog.catagory || 'frontEnd',
    'tags': blog.tag,
    'content': blog.content
  })
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '写入博客成功！'
  };
}

//增加点击数
BlogController.addHits = async ctx => {
  const id = ctx.params.id;
  const blog = await Blog.find({ 'id': id});
  blog.hits++;
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '成功增加点击数！'
  };
}

//按id查找博客
BlogController.getById = async ctx => {
  const id = ctx.params.id;
  const blog = await Blog.find({ 'id': id});
  ctx.type = 'json';
  ctx.body = blog;
}

//按id删除博客
BlogController.delById = async ctx => {
  const id = ctx.params.id;
  const blog = await Blog.deleteOne({ 'id': id});
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '成功删除博客！'
  };
}

//按id修改博客
BlogController.updateById = async ctx => {
  const blog = ctx.request.body;
  await Blog.update({
    'id': blog.id,
  },{ $set: {
    'title': blog.title,
    'catagory': blog.catagory || 'frontEnd',
    'tags': blog.tag,
    'content': blog.content
  }})
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '写入博客成功！'
  };
}

//取所有博客的不同tags
BlogController.getTags = async ctx => {
  const tags = await Blog.distinct('tags');
  ctx.type = 'json';
  ctx.body = tags;
}

//按id使博客置顶
BlogController.setSticky = async ctx => {
  const id = ctx.params.id;
  await Blog.update({
    'id': id,
  },{ $set: {
    'sticky': true
  }})
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '置顶成功！'
  };
}

//按id取消博客置顶
BlogController.cancelSticky = async ctx => {
  const id = ctx.params.id;
  await Blog.update({
    'id': id,
  },{ $set: {
    'sticky': false
  }})
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '取消置顶成功！'
  };
}

module.exports = BlogController;

