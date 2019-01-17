# hm_ai_dashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## 项目目录结构(目录结构生成使用命令：tree -I '*node_module*|*.jpg|*.png|bg' >tree.txt)

```
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public                                                 # //  项目默认index.html存放文件
│   └── index.html
├── src                                                    # //  项目源文件
│   ├── App.vue                                            # //  vue项目根节点
│   ├── api                                                # //  api目录
│   │   ├── axios.js                                       # //  全局配置axios（接口default配置、数据拦截等）
│   │   └── index.js                                       # //  全局api接口配置（存放项目所有接口，集中化管理，方便后期维护）
│   ├── assets                                             # //  项目图片、字体、样式存放目录
│   │   ├── fonts                                          # //  字体存放文件
│   │   ├── images                                         # //  图片存放文件
│   │   └── scss                                           # //  scss存放文件
│   │       ├── common.scss                                # //  全局公共样式文件
│   │       └── hm-variables.scss                          # //  全局scss变量文件
│   ├── components                                         # //  vue公共组件文件
│   │   ├── badge                                          # //  徽章效果组件 
│   │   │   ├── index.js
│   │   │   └── src
│   │   │       └── badge.vue
│   │   ├── buttonUpload.vue                               # //  剧本上传集成化组件
│   │   ├── screenFull.vue                                 # //  全屏显示组件
│   │   └── upload                                         # //  剧本上传公用弹窗组件
│   │       ├── index.js
│   │       └── src
│   │           └── scriptUpload.vue
│   ├── filter                                             # //  项目全局过滤配置
│   │   └── index.js
│   ├── main.js                                            # //  项目入口文件
│   ├── router                                             # //  项目路由配置
│   │   └── index.js
│   ├── store                                              # //  vuex配置文件
│   │   ├── index.js
│   │   └── modules
│   │       └── user.js
│   └── views                                              # //  项目页面文件（pages）
│       ├── layout
│       │   └── header.vue
│       ├── login.vue
│       ├── noFound.vue
│       └── script
│           ├── index.vue
│           └── list.vue
├── tree.txt                                               # //  tree命令生成的项目目录结构文件
└── vue.config.js                                          # //  vue-cli 3.0配置文件（vue-cli 3.0的核心配置）
.
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
