<template>
  <div class="blog-post" v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date }}</p>
    <div class="content" v-html="post.content"></div>
    <router-link to="/blog" class="back-link">← 返回文章列表</router-link>
  </div>
  <div v-else class="not-found">
    <h1>文章未找到</h1>
    <router-link to="/blog">返回文章列表</router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// 示例博客数据（实际应用中应该从API或CMS获取）
const posts = ref([
  {
    id: 1,
    title: 'Vue 3 开发体验',
    date: '2024-12-23',
    content: `
      <h2>Vue 3 的主要特性</h2>
      <p>Vue 3 带来了许多激动人心的特性。首先是 Composition API，它允许我们更好地组织和复用代码。</p>

      <h3>Composition API</h3>
      <p>Composition API 提供了一种更灵活的方式来组织组件逻辑。它让我们能够将相关的代码逻辑组合在一起，而不是分散在不同的选项中。</p>
      <h3>Teleport</h3>
      <p>Teleport 允许我们将组件的内容渲染到DOM中的任何位置，即使这个位置不在组件的模板中。</p>

      <h3>Fragments</h3>
      <p>Vue 3 支持多个根节点，这使得组件更加灵活。</p>
    `
  },
  {
    id: 2,
    title: '前端工程化实践',
    date: '2024-12-22',
    content: `
      <h2>现代前端工程化</h2>
      <p>前端工程化是现代 Web 开发的重要组成部分。</p>

      <h3>构建工具</h3>
      <p>Vite、Webpack 等构建工具大大提高了开发效率。</p>

      <h3>代码规范</h3>
      <p>ESLint、Prettier 等工具确保代码质量和一致性。</p>

      <h3>自动化测试</h3>
      <p>Jest、Cypress 等测试框架保证代码的可靠性。</p>
    `
  }
])

const route = useRoute()

const post = computed(() => {
  const id = parseInt(route.params.id)
  return posts.value.find(p => p.id === id)
})
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.blog-post h1 {
  color: #333;
  margin-bottom: 0.5rem;
}

.date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.8;
  color: #333;
}

.content h2 {
  margin-top: 2rem;
  color: #444;
}

.content h3 {
  margin-top: 1.5rem;
  color: #555;
}

.content pre {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 1rem 0;
}

.content code {
  font-family: 'Monaco', 'Menlo', monospace;
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}
</style>