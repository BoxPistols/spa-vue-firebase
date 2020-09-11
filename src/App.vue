<template>
  <div id="app">
    <div class="head">
      <img
        src="https://vuejs.org/images/logo.png"
        width="50"
        alt="vue"
        class="logo"
      />
      <p>Welcome to Vue.js</p>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">index</router-link>
        </li>
        <li>
          <router-link to="/Contents">Contents</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
    <!-- 
    <div class="head">
      <img src="https://vuejs.org/images/logo.png" width="100" alt="vue" class="logo" />
      <h1>Welcome to Vue.js</h1>
    </div>-->
    <!-- <Basic /> -->
  </div>
</template>

<script>
import Basic from './components/Basic'

export default {
  name: 'app',
  components: {
    Basic,
  },
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
@import url('./css/app.css');

code {
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: 0.9em;
  white-space: pre-wrap;
  color: #2c3e50;
}

code::before,
code::after {
  content: '`';
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
  padding-top: 24px;
  text-align: center;
  color: #2c3e50;
}

#app h1 {
  font-weight: 300;
  margin: 12px 0 24px;
}

.banner {
  height: 200px;
  background-color: #f6f6f6;
  padding: 50px 10px;
}

.bottom {
  padding: 80px 10px;
  font-size: 24px;
  font-weight: 300;
}

.fade {
  font-size: 14px;
}

.logo {
  animation: spin 10s 2s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
