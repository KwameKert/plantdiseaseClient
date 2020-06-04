<template>
  <div id="app" >

    <Login />

    <!-- <Header />
    <div class="container">
        <p class="lead">This is a plant detection disease system capable of suggesting remedies to the various diseases. The model is trained with a Convolution Neural Network.</p>
        <Plant />
    </div> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header';
// import Plant from './components/Plant';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    // Header,
    // Plant,
    Login
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
