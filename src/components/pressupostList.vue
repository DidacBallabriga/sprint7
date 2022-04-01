<template>
<div>
  <div class="container" v-if="nomPressupost!==''&&nomClient!==''">
    <h2>Resum comanda:</h2>
    <p><code>Nom del pressupost:</code> {{nomPressupost}}</p>
    <p><code>Nom del client:</code> {{nomClient}}</p>
    <div class="row">
    <p class="col"><code>Serveis:</code> 
      <ul>
        <li v-if="totalPressupost!==0">{{servei1}}: {{500+totalPressupost}}€</li>
        <li v-if="seo==300">{{servei2}}: {{seo}}€</li>
        <li v-if="ads==200">{{servei3}}: {{ads}}€</li>
      </ul>
    </p>
    <div class="col colbutton">
      <button class="myButton" @click="addPressupostArray" v-if="nomPressupost!==''&&nomClient!==''&&totalPressupost!==0||seo==300||ads==200" >Guardar Pressupost</button>
    </div>
    </div>
    </div>
    <div v-if="showPressupostos">
      <h3>Llistat de pressupostos</h3>
      <div class="containerList" v-for="(pressupost, index) in llistaPressupostos" :key="index">
        <code>Nº {{index+1}} - Pressupost:</code> {{pressupost.nomPressupost}} <code><b>-</b></code> <code>Client:</code> {{pressupost.nomClient}}<br>
         <code>Serveis:</code>
          <ul>
            <li v-if="pressupost.servei1!==undefined">{{pressupost.servei1}}</li>
            <li v-if="pressupost.servei2!==undefined">{{pressupost.servei2}}</li>
            <li v-if="pressupost.servei3!==undefined">{{pressupost.servei3}}</li>
          </ul>
        <code>Preu:</code> {{pressupost.totalPressupostos}}€
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PressupostList',
  data() {
    return{
         servei1: 'Pàgina web',
         servei2: 'Consultoría SEO',
         servei3: 'Campanya Google Ads',
         llistaPressupostos: []
    }
  },
  mounted() {
    if (localStorage.getItem('llistaPressupostos')) {
      try {
        this.llistaPressupostos = JSON.parse(localStorage.getItem('llistaPressupostos'));
      } catch(e) {
        localStorage.removeItem('llistaPressupostos');
      }
    }
  },
  props:{
        totalPressupost: Number,
        arrayCheck: Array,
        nomPressupost: String,
        nomClient: String,
        totalPressupostos: Number,
        showPressupostos: Boolean
    },
   computed: {
    seo(){
      if(this.arrayCheck.includes("300")===true)
      return 300
    },
    ads(){
      if(this.arrayCheck.includes("200")===true)
      return 200
    }
  },
  methods: {
    addPressupostArray: function(){
      let pressupostNom = this.nomPressupost
      let clientNome = this.nomClient
      let pressupostTotal = this.totalPressupostos
      let llistaPressupostos = this.llistaPressupostos

      function Pressupost(pressupostNom, clientNome, pressupostTotal, pagina, seo, ads){
        this.nomPressupost=pressupostNom
        this.nomClient=clientNome
        this.totalPressupostos=pressupostTotal
        this.servei1=pagina
        this.servei2=seo
        this.servei3=ads
      }
      console.log(pressupostTotal);
      if(pressupostNom!==''&clientNome!==''){
        const nouPressupost = new Pressupost(pressupostNom,clientNome,pressupostTotal)
      if(this.totalPressupost!==0){
        nouPressupost.servei1=this.servei1 
      }
      if(this.seo==300){
        nouPressupost.servei2=this.servei2
      }
      if(this.ads==200){
         nouPressupost.servei3=this.servei3
      }
      llistaPressupostos.push(nouPressupost)
      console.log(llistaPressupostos)
      }
      saveLocal()
      function saveLocal() {
      const parsed = JSON.stringify(llistaPressupostos);
      localStorage.setItem('llistaPressupostos', parsed);
    }
      
    }
  }
}
</script>

<style scoped>
hr{
  border: 2px solid red;
}
h3{
  margin-top: 1rem;
  text-align: center;
  color:#f77754;
}
h2{
  text-align: center;
  color:#f77754;
  padding-bottom: 1rem;
}
p{
  color: #718096;
}
.container{
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
}
.containerList{
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  margin: 1rem;
  color: #718096;
}
code{
  color: #f77754;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.colbutton{
  text-align: center;
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
}
button:hover{
    background-color: #309675;
    transition: all .2s ease;
}

</style>



