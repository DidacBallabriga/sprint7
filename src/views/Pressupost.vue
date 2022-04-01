<template>
    <div class="pressupost">
        <h1>Pot realitzar el seu Pressupost:</h1>
        <Pressupostos/>
    </div>
</template>

<script>
import Pressupostos from '@/components/Pressupostos.vue'

export default {
  name: 'Pressupost',
  components: {
    Pressupostos,
  }
}

</script>

<style scoped>
h1{
  color: #fff;
  font-weight: 400;
  text-align: center;
  padding-bottom: 1.5rem;
}
h2{
  color: #718096;
  font-weight: 400;
}
</style>