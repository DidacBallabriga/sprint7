<template>
<div>
  <div class="container" v-if="nomPressupost!==''&&nomClient!==''">
    <h2>Resum del pressupost:</h2>
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
      <button class="myBtn btn" @click="addPressupostArray" v-if="nomPressupost!==''&&nomClient!==''&&totalPressupost!==0||seo==300||ads==200" >✓ Guardar Pressupost</button>
    </div>
    </div>
    </div>
    <div v-if="showPressupostos" class="container-sm">
      <h3>Llistat de pressupostos</h3>
      <h6>ORDENA PER NOM:</h6>
      <div class="filter">
        <button class="myBtn btn" @click="ordenarAZ">PRESSUPOST</button>
        <button class="myBtn btn" @click="ordenarClient">CLIENT</button>
        <button class="myBtn btn" @click="ordenarReset">RESET</button>
        <input type="text" placeholder="Cercar pressupost/client" v-model="cerca">
      </div>
      <div v-if="cerca===''" class="containerList" v-for="(pressupost, index) in llistaPressupostos" :key="index">
        <code>Nº {{pressupost.id}} - Pressupost:</code> {{pressupost.nomPressupost}} <code><b>-</b></code> <code>Client:</code> {{pressupost.nomClient}}<br>
         <code>Serveis:</code>
          <ul>
            <li v-if="pressupost.servei1!==undefined">{{pressupost.servei1}}</li>
            <li v-if="pressupost.servei2!==undefined">{{pressupost.servei2}}</li>
            <li v-if="pressupost.servei3!==undefined">{{pressupost.servei3}}</li>
          </ul>
        <code>Preu:</code> {{pressupost.totalPressupostos}}€
      </div>
      <div v-if="cerca!==''" class="containerList" v-for="(pressupost, index) in llistaPressupostosRender" :key="index">
        <code>Nº {{pressupost.id}} - Pressupost:</code> {{pressupost.nomPressupost}} <code><b>-</b></code> <code>Client:</code> {{pressupost.nomClient}}<br>
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
         llistaPressupostos: [],
         id: 0,
         cerca: "",
         llistaPressupostosRender: []
    }
  },
  watch: {
    cerca: function(cerca){
          this.llistaPressupostosRender = this.llistaPressupostos.filter(function filtrar(obj) {
          if (obj.nomClient.toLowerCase().includes(cerca.toLowerCase())||obj.nomPressupost.toLowerCase().includes(cerca.toLowerCase())) {
        return true;
          }
        })
        console.log(this.llistaPressupostosRender);
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
      let id = this.llistaPressupostos.length+1
      let pressupostNom = this.nomPressupost
      let clientNome = this.nomClient
      let pressupostTotal = this.totalPressupostos
      let llistaPressupostos = this.llistaPressupostos

      function Pressupost(id, pressupostNom, clientNome, pressupostTotal, pagina, seo, ads){
        this.id=id
        this.nomPressupost=pressupostNom
        this.nomClient=clientNome
        this.totalPressupostos=pressupostTotal
        this.servei1=pagina
        this.servei2=seo
        this.servei3=ads
      }
      if(pressupostNom!==''&clientNome!==''){
        const nouPressupost = new Pressupost(id, pressupostNom,clientNome,pressupostTotal)
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
      }
      saveLocal()
      function saveLocal() {
      const parsed = JSON.stringify(llistaPressupostos);
      localStorage.setItem('llistaPressupostos', parsed);
      }  
    },
    ordenarAZ: function(){
      this.llistaPressupostos.sort(function(a,b){
        if(a.nomPressupost.toLowerCase() >b.nomPressupost.toLowerCase() ){
          return 1
        }
        if(a.nomPressupost.toLowerCase() <b.nomPressupost.toLowerCase() ){
          return -1
        }
        return 0
      })
    },
    ordenarClient: function(){
      this.llistaPressupostos.sort(function(a,b){
        if(a.nomClient.toLowerCase() >b.nomClient.toLowerCase() ){
          return 1
        }
        if(a.nomClient.toLowerCase() <b.nomClient.toLowerCase() ){
          return -1
        }
        return 0
      })
    },
    ordenarReset: function(){
       this.llistaPressupostos.sort(function(a,b){
        if(a.id>b.id){
          return 1
        }
        if(a.id<b.id){
          return -1
        }
        return 0
      })
    }
  }
}
</script>

<style scoped>
.filter{
  display: flex;
  justify-content: space-evenly;
}
@media (max-width: 600px){
  .filter{
    flex-direction: column;
  }
}
.filter button{
  padding-top: 0rem;
  padding-bottom: 0rem;
}
@media (max-width: 600px){
  .filter button{
    margin: 0.5rem;
  }
}
h3{
  margin-top: 1rem;
  text-align: center;
  color:#718096;
}
h2{
  text-align: center;
  color: #718096;
  padding-bottom: 1rem;
}
p{
  color: #718096;
}
.container{
  padding: 1rem;
  background-color: #e3e3e9;
  border-radius: 1rem;
  border: 3px solid #718096;
}
.containerList{
  padding: 1rem;
  background-color: #e3e3e9;
  border-radius: 1rem;
  margin: 1rem;
  color: #718096;
  border: 3px solid #718096;
}
code{
  color: #171347 ;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.colbutton{
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
  font-size: 1rem;
  padding: 0.5rem;
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



