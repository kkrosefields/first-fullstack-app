<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cats">Cats</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>