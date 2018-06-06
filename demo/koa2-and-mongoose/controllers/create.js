const User = require('./../models/user');

module.exports = {
  async html(ctx) {
    let html = `
      <h1>koa2 mongo create demo</h1>
      <form method="POST" action="/mongo/create">
        <p>username</p>
        <input name="username" /><br/>
        <p>password</p>
        <input name="password" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.type = 'html';
    ctx.body = html;
  },
  async create(ctx) {
    const { username, password } = ctx.request.body;
    let html = '';
    console.log(ctx.request.body);
    const user = await User.find({ 'username': username});
    if(user.length >= 1) {
      html = `数据重复！<a href="/mongo">返回查看所有数据</a>`;
    } else {
        await User.create({
            'username': username,
            'password': password
        });
        html = `修改成功！<a href="/mongo">返回查看所有数据</a>`;
    }
    ctx.type = 'html';
    ctx.body = html;
  }
}






