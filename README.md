# Programming Showcase Site

## 项目简介
该项目是一个编程作品展示网站，允许用户提交自己的编程作品，支持Turbowarp、Python、C/C++和Java四种语言。用户可以通过注册和登录功能管理自己的作品，并在网站上展示。

## 功能
- **首页**：展示热门编程作品。
- **编程作品展示**：用户可以查看所有提交的编程作品，并按最火和最新进行排序。
- **个人信息展示**：用户可以查看和编辑自己的个人信息，包括头像、名称、账户号和简介。
- **登录与注册功能**：用户可以创建账户并登录，以便提交和管理自己的作品。

## 技术栈
- 前端：HTML, CSS, JavaScript
- 后端：Node.js (假设使用)
- 数据库：MongoDB (假设使用)

## 文件结构
```
programming-showcase-site
├── public
│   ├── index.html
│   ├── styles
│   │   └── main.css
│   └── scripts
│       └── main.js
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── ShowcasePage.js
│   │   ├── ProfilePage.js
│   │   └── AuthPage.js
│   ├── services
│   │   ├── api.js
│   │   └── auth.js
│   ├── utils
│   │   └── helpers.js
│   └── app.js
├── package.json
├── README.md
└── .gitignore
```

## 安装与使用
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   ```
2. 进入项目目录：
   ```
   cd programming-showcase-site
   ```
3. 安装依赖：
   ```
   npm install
   ```
4. 启动项目：
   ```
   npm start
   ```

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目遵循MIT许可证。