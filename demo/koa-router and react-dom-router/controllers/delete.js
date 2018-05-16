const User = require('./../models/user');

module.exports = {
    async input(ctx) {
        let html = `
        <h1>koa2 mongo delete demo</h1>
        <h3>请先输入要删除的用户名：</h3>
        <form method="POST" action="/mongo/delete">
        <p>username</p>
        <input name="username" /><br/>
        <button type="submit">submit</button>
        </form>
        `;
        ctx.type = 'html';
        ctx.body = html;
    },
    async delete(ctx) {
        const { username } = ctx.request.body;
        const res = await User.remove({ 'username': username});
        console.log(res);
        ctx.redirect('/mongo');
        ctx.type = 'text';
        ctx.body = '正在跳回mongo主页...';
    }
}


















