const User = require('./../models/user');

module.exports = {
  async update(ctx) {
    const username = ctx.request.query.username;
    const password = ctx.request.body;
    console.log(username);
    console.log(password);
    const users = await User.update({'username': username}, { $set: password});
    ctx.redirect('/mongo');
    ctx.type = 'text';
    ctx.body = '正在跳回mongo主页...';
  }
}

