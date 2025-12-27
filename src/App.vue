<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav">
        <div class="nav-container">
          <router-link to="/" class="nav-logo">我的博客</router-link>
          <ul class="nav-menu">
            <li><router-link to="/" class="nav-link">首页</router-link></li>
            <li><router-link to="/blog" class="nav-link">博客</router-link></li>
            <li><router-link to="/about" class="nav-link">关于</router-link></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025-pzl-个人blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// 根组件
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #667eea;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.app-footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.app-footer p {
  margin: 0;
}
</style>