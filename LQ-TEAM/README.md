# 蓝客联盟 LQ TEAM

欢迎来到蓝客联盟 LQ TEAM 项目！这是一个允许用户注册账号并发布程序或文章的博客网站。

## 项目结构

```
蓝客联盟-LQ-TEAM
├── src
│   ├── app.ts                # 应用程序的入口点
│   ├── controllers           # 控制器目录
│   │   ├── authController.ts # 处理用户认证的控制器
│   │   ├── postController.ts # 处理文章的控制器
│   │   └── userController.ts # 处理用户信息的控制器
│   ├── models                # 模型目录
│   │   ├── postModel.ts      # 文章模型
│   │   └── userModel.ts      # 用户模型
│   ├── routes                # 路由目录
│   │   ├── authRoutes.ts     # 用户认证相关路由
│   │   ├── postRoutes.ts     # 文章相关路由
│   │   └── userRoutes.ts     # 用户相关路由
│   ├── services              # 服务目录
│   │   ├── authService.ts    # 用户认证服务
│   │   ├── postService.ts    # 文章服务
│   │   └── userService.ts    # 用户服务
│   ├── middlewares           # 中间件目录
│   │   └── authMiddleware.ts  # 认证中间件
│   ├── utils                 # 工具目录
│   │   └── helpers.ts        # 辅助函数
│   └── types                 # 类型定义目录
│       └── index.ts          # 类型接口定义
├── public                    # 公共资源目录
│   ├── css                   # 样式表目录
│   │   └── styles.css        # 网站样式
│   ├── js                    # JavaScript脚本目录
│   │   └── scripts.js        # 网站脚本
│   └── index.html            # 主HTML页面
├── package.json              # npm配置文件
├── tsconfig.json             # TypeScript配置文件
└── README.md                 # 项目文档说明
```

## 功能

- 用户注册和登录
- 发布、获取和删除文章
- 用户信息的获取和更新

## 安装与运行

1. 克隆项目到本地
2. 运行 `npm install` 安装依赖
3. 运行 `npm start` 启动应用

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

该项目遵循 MIT 许可证。