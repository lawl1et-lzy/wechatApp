# my-wxapp

> A Mpvue project
## 包含的技术：
1. mpvue -> vue 技术栈
2. vuex 数据状态管理
3. fly 数据封装和请求
4. 小程序的一些自带api

## api
1. 参考网易云
2. 链接：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%b3%a8%e6%84%8f


## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



