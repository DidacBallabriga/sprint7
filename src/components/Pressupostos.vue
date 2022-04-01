<template>
  <div class="pressupostos container">
    <div class="row justify-content-start">
    <div class="col-6">
      <div class="infoPressupost">
        <p>NOM PRESSUPOST*<input type="text" v-model="nomPressupost" placeholder="exemple: SEO Local"></p>
        <p>CLIENT*<input type="text" v-model="nomClient" placeholder="exemple: IT Academy"></p>
      </div>
        <p class="nota">*El <b>nom del pressupost</b> i de <b>client</b> son <b>nessesaris</b> per guardar les dades.</p>
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
      <h3>Preu: {{ totalPressupostos }}€</h3>
      <hr class="divider">
       <div class="buttons">
          <button @click="$router.push('/')">◁ Tornar enrere</button>
          <button v-on:click="myAlert()">✓ Continuar</button>
        </div>
      </div>
      <div class="col-6">
        <button @click="showPressupostosFunction">Veure/Ocultar pressupostos desats</button>
        <PressupostList :totalPressupost="totalPanell" :arrayCheck="preu" :nomPressupost="nomPressupost" :nomClient="nomClient" :totalPressupostos="totalPressupostos" :showPressupostos="showPressupostos" /></div>
      </div>
    
  </div>
</template>



<script>
import Panell from '@/components/Panell.vue'
import PressupostList from '@/components/pressupostList.vue'
export default {
  name: 'Pressupostos',
   components: {
    Panell,
    PressupostList
  },
  data() {
    return{
    preu: [0],
    show: false,
    totalPanell: 0,
    nomPressupost: '',
    nomClient: '',
    pressupostos: [],
    showPressupostos: false
    }
  },
  computed: {
    totalPressupostos(){
      let sumaPreu = this.preu.reduce((acumulador, numero)=>parseInt(acumulador)+parseInt(numero));
      let sumaTotal = sumaPreu
      sumaTotal += this.totalPanell
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
    showPressupostosFunction: function(){
      if(this.showPressupostos===false){
        this.showPressupostos=true
      } else {
        this.showPressupostos=false
      }
    },
    myAlert: function(){
      alert("Moltes gràcies! ✅ Hem rebut la seva comanda")
    }
  }
}
</script>



<style scoped>
.infoPressupost{
  display: flex;
  flex-direction: row;
}
.infoPressupost p{
  margin-bottom: 0rem;
}
.nota{
  color: #718096;
  font-size: 0.9rem;
}
.containerPropi{
  display: inline-block;
  text-align: start;
  justify-content: start;
}
.pressupostos{
  color: #fff;
}
input{
  margin: 0.7rem;
}
h2{
  font-weight: 600;
  color: #718096;
  margin-top: 1.5rem;
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
  text-align: center;
}
</style>