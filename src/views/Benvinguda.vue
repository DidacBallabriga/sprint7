<template>
  <div class="container">
  <h1>Calculadora de pressupostos</h1>
  <h2>Fes servir la nostra calculadora per conèixer el preu de la seva idea.</h2>
  <button class="myBtn btn" @click="$router.push('pressupost')">▷ Començar</button>
  
  </div>
</template>

<script>
export default {
    name: 'Benvinguda'
}
</script>

<style scoped>
.container{
  text-align: center;
}
h1{
  color: #fff;
  font-weight: 400;
}
h2{
  color: #718096;
  font-weight: 400;
  padding: 2rem;
}
.myBtn {
  background: #89d8d3;
  background-image: -webkit-linear-gradient(top, #89d8d3, #2980b9);
  background-image: -moz-linear-gradient(top, #89d8d3, #2980b9);
  background-image: -ms-linear-gradient(top, #89d8d3, #2980b9);
  background-image: -o-linear-gradient(top, #89d8d3, #2980b9);
  background-image: linear-gradient(to bottom, #89d8d3, #2980b9);
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  border-color: #89d8d3;
  color: #ffffff;
  font-size: 1.4rem;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.myBtn:hover {
  background: #2980b9;
  background-image: -webkit-linear-gradient(top, #2980b9, #89d8d3);
  background-image: -moz-linear-gradient(top, #2980b9, #89d8d3);
  background-image: -ms-linear-gradient(top, #2980b9, #89d8d3);
  background-image: -o-linear-gradient(top, #2980b9, #89d8d3);
  background-image: linear-gradient(to bottom, #2980b9, #89d8d3);
  text-decoration: none;
  color: #ffffff;
}
</style>