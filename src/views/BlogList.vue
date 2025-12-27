<template>
  <div class="blog-list">
    <h1>博客文章</h1>
    <div class="posts">
      <article v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="date">{{ post.date }}</p>
        <p class="excerpt">{{ post.excerpt }}</p>
        <router-link :to="`/blog/${post.id}`" class="read-more">阅读全文</router-link>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Vue 3 开发体验',
    date: '2024-12-23',
    excerpt: '探索 Vue 3 的新特性，包括 Composition API、Teleport 和 Fragments 等...',
    content: 'Vue 3 带来了许多激动人心的特性。首先是 Composition API，它允许我们更好地组织和复用代码...'
  },
  {
    id: 2,
    title: '前端工程化实践',
    date: '2024-12-22',
    excerpt: '讨论现代前端开发中的工程化实践，包括构建工具、代码规范和自动化测试...',
    content: '前端工程化是现代 Web 开发的重要组成部分...'
  }
])
</script>

<style scoped>
.blog-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.posts {
  display: grid;
  gap: 2rem;
}

.post-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.post-card h2 {
  margin-top: 0;
  color: #333;
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.excerpt {
  color: #555;
  line-height: 1.6;
  margin: 1rem 0;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>