## 概述

这是一个前后端路由结合的demo，前端路由是react-dom-router，后端路由是koa-router。

## 安装

请分别在koa-router and react-dom-router和static这2个文件夹下都install一次。

## 开始

先在static文件夹下执行npm run build打包，然后在koa-router and react-dom-router文件夹下执行npm start。

## ToDo

由于所有指向前端静态资源的url都会跳转到前端静态资源的主页。这就造成了一个bug，就是我收藏了前端静态资源其中的一个页面，当我下次想打开这个页面的时候**只会跳到主页**，并不会跳到这个页面。

这个bug留待后续优化了，思路是**用正则截取后面的路径，然后通过传参传给前端路由，再由前端路由处理。**












