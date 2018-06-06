const Util = {};

//输出随机字符串
const randStr = () => Math.random().toString(36).substr(2);

//字符串调整为len位
const supplyFunc = (str, len) => {
  if(str.length > len) return str.substr(0, len);
  if(str.length < len) return supplyFunc(str + randStr(), len);
  return str;
}

//随机len位的字符串
const str10 = () => supplyFunc(randStr(), 10);

//密匙
Util.code = '杨舟';

//加密函数
Util.encode = str => str10() + escape(str) + str10();

//解密函数
Util.decode = str => unescape(str.substr(10, str.length - 20));

//管理员账号
Util.name = 'admin';
Util.password = '123456';

module.exports = Util;
