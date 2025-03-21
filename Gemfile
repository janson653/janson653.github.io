source "https://rubygems.org"

# 使用github-pages gem来确保与GitHub Pages兼容
gem "github-pages", "~> 228", group: :jekyll_plugins

# Windows和JRuby平台需要的依赖
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1.1"
end

# Jekyll 插件 (GitHub Pages 支持的插件)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-gist", "~> 1.5"
  gem "jekyll-github-metadata", "~> 2.13"
end

# 开发相关
group :development do
  gem "webrick", "~> 1.7"
end 