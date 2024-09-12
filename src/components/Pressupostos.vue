<template>
  <div class="pressupostos container">
    <div class="row justify-content-start">
      <div class="col-lg-6 container-sm">
        <div class="infoPressupost">
          <p>NOM PRESSUPOST*<input type="text" v-model="nomPressupost" placeholder="exemple: SEO Local"></p>
          <p>NOM DEL CLIENT*<input type="text" v-model="nomClient" placeholder="exemple: IT Academy"></p>
        </div>
          <p class="nota">*El <b>nom del pressupost</b> i de <b>client</b> son <b>nessesaris</b> per guardar les dades.</p>
          <h2>¿Qué vol fer?</h2>
            <div class="containerPropi">
              <input type="checkbox" value=500 v-model="preu" @change="showDetails">Una pàgina web (500€)
              <br>
              <div class="panell" v-if="show">
                <Panell @preuWebPagines="sumaPreuWeb" @preuWeb="sumaPreuWeb"/><br>
              </div>
                <input type="checkbox" value=300 v-model="preu">Una consultoría SEO (300€)<br>
                <input type="checkbox" value=200 v-model="preu">Una campanya de Google Ads (200€)<br>
            </div>
            <hr class="divider">
            <h4>Aquí trobarà el <b>cost total</b> del seu pressupost:</h4>
            <h3>Preu: {{ totalPressupostos }}€</h3>
            <hr class="divider">
            <div class="buttons">
              <button class="myBtn btn" @click="$router.push('/')">◁ Tornar enrere</button>
            </div>
        </div>
        <div class="col-lg-6">
          <PressupostList :totalPressupost="totalPanell" :arrayCheck="preu" :nomPressupost="nomPressupost" :nomClient="nomClient" :totalPressupostos="totalPressupostos" :showPressupostos="showPressupostos"/>
            <div class="buttons">
              <button class="myBtn btn" v-if="showPressupostos===false" @click="showPressupostosFunction"><img src="@/assets/show_eye_icon_183818.svg" alt=""> Veure pressupostos desats</button>
              <button class="myBtn btn" v-if="showPressupostos===true" @click="showPressupostosFunction"><img src="@/assets/hide_icon_183794.svg" alt=""> Ocultar llistat de pressupostos</button>
            </div>
        </div>
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
    showPressupostos: false,
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
    }
  }
}
</script>



<style scoped>
.infoPressupost{
  display: flex;
  flex-direction: row;
}
@media (max-width: 600px){ 
  .infoPressupost{
    flex-direction: column;
}
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
.buttons{
  padding-bottom: 2rem;
  text-align: center;
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
  color: #fff;
  font-size: 1.1rem;
  padding: 10px 20px 10px 20px;
  margin: 1rem;
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