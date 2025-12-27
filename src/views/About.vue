<template>
  <div class="about">
    <h1>关于我</h1>
    <div class="content">
      <div class="intro">
        <img :src="avatarImage" alt="头像" class="avatar">
        <p>你好！我是这个博客的作者PZL，一名热爱编程和分享的前端开发者。</p>
      </div>

      <h2>我的故事</h2>
      <p>纯粹的编程小白，对于前端、后端、运营和全栈一概不熟。</p>

      <h2>技能栈</h2>
      <ul>
        <li>Vue.js / React</li>
        <li>JavaScript / TypeScript</li>
        <li>HTML / CSS / Sass</li>
        <li>Node.js / Express</li>
        <li>Git / GitHub</li>
      </ul>

      <h2>兴趣爱好</h2>
      <p>除了编程，我还热衷于阅读、旅行和网络冲浪。</p>

      <h2>项目展示</h2>
      <div class="projects">
        <div class="project">
          <h3>个人博客网站</h3>
          <p>使用Vue 3 + Vite构建的响应式博客网站，支持多页面和路由。</p>
        </div>
        <div class="project">
          <h3>待开发项目</h3>
          <p>正在学习中，敬请期待...</p>
        </div>
      </div>

      <h2>联系方式</h2>
      <p>可以通过以下方式联系我：</p>
      <ul>
        <li>Email: 770194506@qq.com</li>
        <li>GitHub: <a href="https://github.com/PZL-0" target="_blank">PZL-0</a></li>
        <li>博客: <a href="https://pzl-0.github.io/pzl_blog_12_23/" target="_blank">在线访问</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 关于页面组件
import avatarImage from '../assets/images/meme_1.jpg'
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about h1 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.8;
  color: #333;
  text-align: center;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 2rem;
}

.content h2 {
  margin-top: 2rem;
  color: #444;
}

.content ul {
  list-style-type: disc;
  margin-left: 2rem;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  align-items: center;
}

.project {
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.project h3 {
  margin-top: 0;
  color: #667eea;
}

.content ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.content li {
  margin-bottom: 0.5rem;
}

.content a {
  color: #667eea;
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}
</style>