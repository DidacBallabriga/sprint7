<template>
  <div class="pressupostos">
    <h2>¿Qué vol fer?</h2>
    <div class="containerPropi">
      <input type="checkbox" value=500 v-model="preu" @change="showDetails">Una pàgina web (500€)
      <br>
      <div class="panell" v-if="show"><Panell @preuWebPagines="sumaPreuWeb" @preuWeb="sumaPreuWeb"/><br></div>
      <input type="checkbox" value=300 v-model="preu">Una consultoría SEO (300€) 
      <br>
      <input type="checkbox" value=200 v-model="preu">Una campanya de Google Ads (200€)
      <br>
    </div>
     <hr class="divider">
     <h4>Aquí trobarà el <b>cost total</b> del seu pressupost:</h4>
    <h3>Preu: {{ totalPressupostos+totalPanell }}€</h3>
    <hr class="divider">
    <div class="buttons">
      <button @click="$router.push('/')">◁ Tornar enrere</button>
      <button v-on:click="myAlert()">✓ Continuar</button>
    </div>
  </div>
</template>



<script>
import Panell from '@/components/Panell.vue'
export default {
  name: 'Pressupostos',
   components: {
    Panell
  },
  data() {
    return{
    preu: [0],
    show: false,
    totalPanell: 0
    }
  },
  computed: {
    totalPressupostos(){
      let sumaPreu = this.preu.reduce((acumulador, numero)=>parseInt(acumulador)+parseInt(numero));
      let sumaTotal = sumaPreu
      return sumaTotal
    }
  },
  methods: {
    showDetails: function(){
      if(this.show==false){
        this.totalPanell = 30
        this.show = true
      } else {
        this.totalPanell = 0
        this.show = false
      }
    },
    sumaPreuWeb: function(preuWeb){
      this.totalPanell = preuWeb
    },
    myAlert: function(){
      alert("Moltes gràcies! ✅ Hem rebut la seva comanda")
    }
  }
}

</script>



<style scoped>
.containerPropi{
  display: inline-block;
  text-align: start;
  justify-content: start;
}
.pressupostos{
  text-align: start;
  color: #fff;
  text-align: center;
}
input{
  margin: 0.7rem;
}
h2{
  padding: 2rem;
  font-weight: 600;
  color: #718096;
}
h4{
  font-size: 1.1rem;
  font-weight: 600;
  color: #718096;
}
.divider{
    position: relative;
    width: 90%;
    border: 0;
    top: 0;
    left: 50%;
    display: block;
    height: 1px;
    content: '';
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, #d1dbe7 0, rgba(255, 255, 255, 0) 75%);
    margin: 2rem;
}
button{
  padding: 1.2rem;
  background-color: #3fbf97;
  border-color: #3fbf97;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
  margin: 1rem;
}
button:hover{
    background-color: #309675;
    transition: all .2s ease;
}
.buttons{
  padding: 2rem;
}


</style>