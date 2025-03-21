# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3"

# Theme specified in _config.yml
gem "jekyll-theme-chirpy", "~> 6.4.2"

gem "html-proofer", "~> 4.4", group: :test

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]

group :jekyll_plugins do
  # gem "jekyll-feed" # 暂时禁用，避免与Chirpy主题的feed.xml冲突
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  # gem "jekyll-remote-theme"
end
