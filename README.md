# Janson Blog

这是一个使用GitHub Pages和Jekyll部署的静态博客网站，专注于分享JavaCV视频处理技术的学习心得与实践经验。

## 功能特点

- 纯静态网站，无需服务器
- 支持Markdown格式的文章展示
- 响应式设计，适配各种设备
- 代码高亮支持多种编程语言
- 文章目录自动生成
- 简洁美观的UI设计

## 目录结构

```
.
├── _config.yml          # Jekyll配置文件
├── _data/               # 网站数据文件
├── _drafts/             # 草稿文章
├── _includes/           # 可复用的HTML片段
│   ├── footer.html      # 页脚
│   └── navbar.html      # 导航栏
├── _layouts/            # 页面布局模板
│   ├── default.html     # 默认布局
│   ├── home.html        # 首页布局
│   ├── page.html        # 普通页面布局
│   └── post.html        # 文章页面布局
├── _posts/              # 已发布的文章
├── assets/              # 静态资源文件
│   ├── css/             # CSS样式文件
│   ├── images/          # 图片文件
│   └── js/              # JavaScript文件
├── about.md             # 关于页面
├── index.md             # 首页
├── Gemfile              # Ruby依赖管理
└── README.md            # 项目说明
```

## 技术栈

- Jekyll（静态网站生成器）
- HTML5/CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Markdown/Liquid
- GitHub Pages (托管服务)

## 本地开发

1. 安装依赖
   ```bash
   # 安装Ruby和Jekyll（如果尚未安装）
   # Ubuntu/Debian
   sudo apt-get install ruby-full build-essential zlib1g-dev
   
   # 安装Bundler和项目依赖
   gem install bundler
   bundle install
   ```

2. 本地运行
   ```bash
   bundle exec jekyll serve
   ```

3. 在浏览器中访问 `http://localhost:4000`

## 添加新文章

1. 在`_posts`目录下创建Markdown文件，文件名格式为`YYYY-MM-DD-title.md`
2. 在文件开头添加Front Matter，例如：
   ```yaml
   ---
   layout: post
   title: "文章标题"
   date: YYYY-MM-DD
   category: "分类"
   tags: [标签1, 标签2]
   excerpt: "文章摘要"
   ---
   ```
3. 编写Markdown内容

## 部署

项目使用GitHub Pages自动部署，只需将更改推送到主分支：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 许可证

MIT License 