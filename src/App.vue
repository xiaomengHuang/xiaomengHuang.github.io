<template>
  <div id="app" class="page-container">
        <header>
            <span class="logo">POWERED BY : 前端小学生</span>
            <ul>
                <li>
                    <router-link to="/index">主页</router-link>
                </li>
                <li>
                    <router-link to="/">test</router-link>
                </li>
                <li>
                    <router-link to="/bar">bar</router-link>
                </li>
            </ul>
        </header>
        <div id="index" class="body-container">
                <div class="body-inner">
                    <span class="big-span">L</span>
                    <span class="small-span">E</span>
                    <span class="small-span">S</span>
                    <span class="small-span">S</span>
                    <span class="hidden">Z</span>
                    <span class="big-span">I</span>
                    <span class="small-span">S</span>
                    <span class="hidden">Z</span>
                    <span class="big-span">M</span>
                    <span class="small-span">O</span>
                    <span class="small-span">R</span>
                    <span class="small-span">E</span>
                </div>
                </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
