<template>
<div id="contents">
  <Basic />
</div>
</template>

<script>
import Basic from "./components/Basic";
// import TextCounter from "./components/TextCounter";

export default {
  name: "app",
  components: {
    Basic,
    // TextCounter
  }
};
</script>

<style>
@import url("./css/app.css");

code {
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: 0.9em;
  white-space: pre-wrap;
  color: #2c3e50;
}

code::before,
code::after {
  content: "`";
}
</style>

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
  min-height: 200px;
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
