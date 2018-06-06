const User = require('./../models/user');

module.exports = {
  async find(ctx) {
    const username = ctx.request.body;
    let html = '';
    console.log(username.username);
    const users = await User.find(username);
    html += JSON.stringify(users);
    html += `
    <form method="POST" action="/mongo/update?username=${username.username}">
      <p>password: <input name="password" /></p><br/>
      <button type="submit">修改密码</button>
      <button><a href="/mongo">返回查看所有数据</a></button>
    </form>
    `;
    ctx.type = 'html';
    ctx.body = html;
  },

  async getAll(ctx) {
    const users = await User.find();
    let html = `
      <h1>koa2 mongo retrieve demo</h1>
      <button><a href="/mongo/create">增加数据</a></button>
      <button><a href="/mongo/delete">删除数据</a></button>
      <form method="POST" action="/mongo/find">
        <p>username: <input name="username" /><button type="submit">查找数据</button></p>
      </form>
      <div>数据如下：</div>
      <div>${ users }</div>
    `;
    ctx.type = 'html';
    ctx.body = html;
  }
}

