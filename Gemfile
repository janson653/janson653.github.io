# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3.2"

# Theme specified in _config.yml
gem "jekyll-theme-chirpy", "~> 6.2.0"

gem "html-proofer", "~> 4.4", group: :test

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]

# 添加Ruby 3.4.0即将不再默认包含的gem
gem "csv"
gem "base64"

group :jekyll_plugins do
  # gem "jekyll-feed" # 暂时禁用，避免与Chirpy主题的feed.xml冲突
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  # remote_theme插件改为注释，因为我们现在使用本地主题
  # gem "jekyll-remote-theme", "~> 0.4.3"
end
