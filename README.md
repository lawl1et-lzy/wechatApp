# my-wxapp

> A Mpvue project
## 包含的技术：
1. mpvue -> vue 技术栈
2. vuex 数据状态管理
3. fly 数据封装和请求
4. 小程序的一些自带api
5. scss

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

## 项目展示

### Login 登录页

<img src="https://github.com/lawliet-lzy/resource/blob/master/image/WechatApp/Login.png" width="414" height="736"/>

### SongSheet 歌单列表
<img src="https://github.com/lawliet-lzy/resource/blob/master/image/WechatApp/SongSheet.png" width="414" height="736"/>

### SongList 歌曲列表

<img src="https://github.com/lawliet-lzy/resource/blob/master/image/WechatApp/SongList.png" width="414" height="736"/>

### UserInfo 个人信息

<img src="https://github.com/lawliet-lzy/resource/blob/master/image/WechatApp/SongList.png" width="414" height="736"/>


## 项目概览

```
---
 |---- build/                       webpack配置文件            
 |---- config/                      配置文件            
 |---- dist/                        微信开发者工具运行程序            
 |---- src/                         所有代码资源            
    |---- Api/                      项目api使用接口            
    |---- components/               公有组件            
        |---- SongSheetList/        歌单列表组件            
     |---- pages/                   所有页面            
        |---- login/                登录页            
        |---- my/                   个人信息也            
        |---- song-list/            歌曲列表页            
        |---- song-sheet/           歌单列表页            
     |---- store/                   redux 全局 store仓库            
        |---- actions/              actions集合            
        |---- index/                store 入口            
        |---- mutations-type/       常量            
        |---- mutations/            mutations 集合            
        |---- state/                state 数据集合            
     |---- util/                    工具类            
        |---- fly/                  fly 统一配置项     
    |---- app.json/                 小程序入口配置文件  
    |---- App.vue/                  vue 入口根组件
    |---- main.js/                  vue 入口js文件       
 |---- static                       静态资源            
 |---- index.html                   入口html文件            
 |---- package.json                 配置信息            
 |---- README.md                    说明文档            
```

## 网易云音乐 API
github 链接：https://github.com/Binaryify/NeteaseCloudMusicApi

### 环境要求

需要 NodeJS 8.12+ 环境

### 安装

```shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install
```

### 运行

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

### 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi)


