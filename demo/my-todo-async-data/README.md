## 概述

这是仿照[redux官网的todo-demo](https://github.com/reduxjs/redux/tree/master/examples/todos)，自己用react和redux-thunk编写的todo。有2个特点：
1. 精简的es6语法。
2. 使用redux-thunk对redux的store进行异步更新。

在todo下面添加了一个组件进行异步获取我的react博客的标题，点击next按钮异步获取下一个标题。

## 安装

```
npm install
```

## 开始

```
npm start
```

## 感受

感觉redux-thunk只是允许一个action返回一个异步函数，这个异步函数在一段时间获取数据后会dispatch另一个action从而达到更新store的state的效果。仅此而已。












