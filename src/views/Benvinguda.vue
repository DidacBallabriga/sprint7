<template>
  <div class="container">
  <h1>Calculadora de pressupostos</h1>
  <h2>Fes servir la nostra calculadora per conèixer el preu de la seva idea.</h2>
  <button @click="$router.push('pressupost')">▷ Començar</button>
  
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
button{
  margin: 2rem;
  padding: 1.2rem;
  background-color: #3fbf97;
  border-color: #3fbf97;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
}
button:hover{
    background-color: #309675;
    transition: all .2s ease;
}

</style>