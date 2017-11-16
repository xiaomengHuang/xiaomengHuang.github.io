<template>
  <div id="app" class="page-container">
        <header>
            <span class="logo">POWERED BY : 前端小学生</span>
            <ul>
                <li>
                    <router-link to="/index">Home</router-link>
                </li>
                <li>
                    <router-link to="/">Works</router-link>
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
  @import './css/main.css'
</style>
