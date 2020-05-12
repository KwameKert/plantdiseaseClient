<template>
  <div id="app" >
    <Header />
    <div class="container">
        <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repudiandae libero debitis incidunt consequatur! Placeat deserunt dicta, modi quidem sapiente, amet dolore numquam hic architecto et qui ab assumenda eligendi.</p>
        <Plant />
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header';
import Plant from './components/Plant';

export default {
  name: 'App',
  components: {
    Header,
    Plant
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
