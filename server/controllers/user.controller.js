const User = require('./../models/user');
const Util = require('./../../config/util');

const UserController = {};
let userId = 2;

//建立一个用户
UserController.createOne = async ctx => {
  const { name, password } = ctx.request.body;

  await User.create({
    'id': userId++,
    'name': name,
    'password': password
  });
  ctx.type = 'json';
  ctx.body = {
    success: 1,
    msg: '建立用户成功！'
  };
};

//建立管理员
UserController.createAdmin = async ctx => {
  const { hashAuth, name, password } = ctx.request.body;

  if( Util.decode(hashAuth) !== Util.code ) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '权限不足！'
    };
  } else {
    await User.create({
      'id': userId++,
      'name': name,
      'password': password,
      'authority': 1
    });
    ctx.type = 'json';
    ctx.body = {
      success: 1,
      msg: '建立管理员成功！'
    };
  }
};

//按id删除一个用户(管理员权限)
UserController.delById = async ctx => {
  const id = ctx.params.id;
  const { hashAuth } = ctx.request.body;

  if(id === 1) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '管理员无法删除！'
    };
  }else if( Util.decode(hashAuth) !== Util.code ) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '权限不足！'
    };
  } else {
    await User.deleteOne({ 'id': id});
    ctx.type = 'json';
    ctx.body = {
      success: 1,
      msg: '删除成功！'
    };
  }
};

//查看所有用户(管理员权限)
UserController.getAll = async ctx => {
  const { hashAuth } = ctx.request.body;

  if( Util.decode(hashAuth) !== Util.code ) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '权限不足！'
    };
  } else {
    const users = await User.find();
    ctx.type = 'json';
    ctx.body = users;
  }
};

//按id查找一个用户(管理员权限)
UserController.getById = async ctx => {
  const id = ctx.params.id;
  const { hashAuth } = ctx.request.body;

  if( Util.decode(hashAuth) !== Util.code ) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '权限不足！'
    };
  } else {
    const user = await User.findOne({ 'id': id});
    ctx.type = 'json';
    ctx.body = user;
  }
};

//返回所有的用户名
UserController.getNames = async ctx => {
  const names = await User.distinct('name');
  ctx.type = 'json';
  ctx.body = names;
};

//修改密码
UserController.alterPassword = async ctx => {
  const { name, password, newPassword } = ctx.request.body;
  const user = await User.findOne({ 'name': name});
  if(user.password !== password) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '原密码错误！'
    };
  } else {
    await User.update({
      'name': name,
    },{ $set: {
      'password': newPassword
    }})
    ctx.type = 'json';
    ctx.body = {
      success: 1,
      msg: '修改密码成功！'
    };
  }
};

//用户登录
UserController.isUser = async ctx => {
  const { name, password } = ctx.request.body;
  const user = await User.findOne({ 'name': name});

  if(user.password != password) {
    ctx.type = 'json';
    ctx.body = {
      success: 0,
      msg: '登录失败！'
    };
  } else {
    ctx.type = 'json';
    ctx.body = {
      success: 1,
      msg: '登录成功！'
    };
  }
};

module.exports = UserController;
