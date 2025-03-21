---
layout: page
title: 标签
permalink: /tags/
---

<div class="tags-page">
  {% assign sorted_tags = site.tags | sort %}
  
  <div class="tag-cloud">
    {% for tag in sorted_tags %}
      {% assign tag_name = tag | first %}
      {% assign posts = tag | last %}
      <a href="#{{ tag_name | slugify }}" class="tag-link" style="font-size: {{ posts.size | times: 4 | plus: 80 }}%">
        #{{ tag_name }} <span class="tag-count">({{ posts.size }})</span>
      </a>
    {% endfor %}
  </div>

  <div class="tag-groups">
    {% for tag in sorted_tags %}
      {% assign tag_name = tag | first %}
      {% assign posts = tag | last %}
      <div class="tag-group" id="{{ tag_name | slugify }}">
        <h2 class="tag-title">#{{ tag_name }}</h2>
        <ul class="tag-posts">
          {% for post in posts %}
            <li>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .tags-page {
    padding: 20px 0;
  }
  .tag-cloud {
    margin-bottom: 40px;
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
  }
  .tag-link {
    display: inline-block;
    margin: 5px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .tag-link:hover {
    color: #007bff;
    transform: scale(1.05);
  }
  .tag-count {
    font-size: 0.8em;
    color: #666;
  }
  .tag-group {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .tag-title {
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0;
  }
  .tag-posts {
    list-style-type: none;
    padding-left: 0;
  }
  .tag-posts li {
    margin-bottom: 10px;
  }
  .post-date {
    font-size: 0.85em;
    color: #666;
    margin-left: 10px;
  }
</style> 