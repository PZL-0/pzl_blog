<template>
  <div class="home">
    <header class="hero">
      <h1>欢迎来到我的个人博客</h1>
      <p>版本: v{{ version }}</p>
      <router-link to="/blog" class="btn">查看博客文章</router-link>
    </header>

    <section class="info-section">
      <div class="date-weather">
        <div class="date">
          <h3>今日日期</h3>
          <p>{{ currentDate }}</p>
        </div>
        <div class="weather">
          <h3>今日天气</h3>
          <input v-model="city" @keyup.enter="fetchWeather" placeholder="输入城市名" class="city-input">
          <button @click="fetchWeather" class="weather-btn">获取天气</button>
          <p v-if="weather">{{ weather }}</p>
          <p v-else>点击获取天气</p>
          <p class="source">数据来源于：<a href="https://wttr.in/" target="_blank">wttr.in</a></p>
        </div>
      </div>
    </section>

    <section class="featured">
      <h2>最新文章</h2>
      <div class="post-preview">
        <h3>Vue 3 开发体验</h3>
        <p>探索 Vue 3 的新特性...</p>
        <router-link to="/blog/1">阅读更多</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import packageJson from '../../package.json'

// 首页组件
const currentDate = ref(new Date().toLocaleDateString('zh-CN'))
const city = ref('北京')
const weather = ref('')
const version = ref(packageJson.version)

const fetchWeather = async () => {
  try {
    const response = await fetch(`https://wttr.in/${city.value}?format=3`)
    if (response.ok) {
      weather.value = await response.text()
    } else {
      weather.value = '获取天气失败'
    }
  } catch (error) {
    weather.value = '网络错误'
  }
}

onMounted(() => {
  fetchWeather()
})
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.info-section {
  margin: 2rem 0;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.date-weather {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.date, .weather {
  text-align: center;
}

.city-input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.weather-btn {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.weather-btn:hover {
  background: #5a67d8;
}

.source {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.source a {
  color: #667eea;
  text-decoration: none;
}

.source a:hover {
  text-decoration: underline;
}

.featured {
  margin-top: 2rem;
}

.post-preview {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.post-preview h3 {
  margin-top: 0;
}
</style>