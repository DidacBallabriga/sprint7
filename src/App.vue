<template>
  <div id="app">
    <nav>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #103a6f;
}
html,
body {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    margin: 0;
    text-align: left;
    color: #718096;
    background: #103a6f;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
