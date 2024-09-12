<template>
  <div class="panel">
     <p>Nombre de pàgines 
    <InputPanell 
     :value="pagines" 
     @sumaInputPanell="sumaTotalPagines" 
     @restaInputPanell="restaTotalPagines"
     @InputPanell="actualPagines"/>
        <b-button class="myButton" @click="$bvModal.show('modal-scoped')"><img class="myImage" src="@/assets/icons8-acerca-de.svg" alt=""></b-button>
        <b-modal id="modal-scoped">
            <p>Si us plau, informi del nombre de pàgines que tindrà la seva web</p>
        </b-modal> 
     </p> 

     <p>Nombre d'idiomes  
    <InputPanell 
     :value="idiomes" 
     @sumaInputPanell="sumaTotalIdiomes" 
     @restaInputPanell="restaTotalIdiomes"
     @InputPanell="actualIdiomes"/> 
        <b-button class="myButton" @click="$bvModal.show('modal-scoped-1')"><img class="myImage" src="@/assets/icons8-acerca-de.svg" alt=""></b-button>
        <b-modal id="modal-scoped-1">
            <p>Si us plau, informi del nombre d'idiomes que tindrà la seva web</p>
        </b-modal>
     </p> 
  </div>
</template>



<script>
import InputPanell from '@/components/inputPanell.vue'
export default {
    name: 'Panell',
    components: {
    InputPanell
    },
    data(){
        return{
            pagines: 1,
            idiomes: 1,
            suma: ""
        }
    },
    methods: {
        sumaTotalPagines: function(value){
            value++
            this.pagines = value
            },
        restaTotalPagines: function(value){
            if(this.pagines>0)
            value--
            this.pagines= value
            },    
        sumaTotalIdiomes: function(value){
            value++
            this.idiomes = value
            },
        restaTotalIdiomes: function(value){
            if(this.idiomes>0)
            value--
            this.idiomes = value
            },
        actualPagines: function(value){
            this.pagines = value
        },
        actualIdiomes: function(value){
            this.idiomes = value
        }       
    },
    watch: {
        pagines: function(){
            let total = parseFloat((this.pagines*this.idiomes)*30)
            this.suma = total
            this.$emit('preuWeb', total)
            },
        idiomes: function(){
            let total = parseFloat((this.pagines*this.idiomes)*30)
            this.suma = total
            this.$emit('preuWeb', total)
            }    
    }
}
</script>

<style scoped>
.modal-content{
    border: 10px solid black !important;
}
.myButton{
    background-color: transparent;
    border: none;
}
.myButton:hover{
    background-color: transparent;
    border: none;
}
.myButton:focus{
    background-color: transparent;
    border: none;
}
.myButton:visited{
    background-color: transparent;
    border: none;
}
p{
    display: flex;
    align-items: center;
}
.panel{
    border: 3px solid #718096;
    padding: 1rem;
    border-radius: 1rem;
    width: 22rem;
}
.info{
    height: 1.5rem;
    width: 1.5rem;
}
.myImage{
    height: 1rem;
    width: 1rem;
}
.myImage:hover{
    height: 1.5rem;
    width: 1.5rem;
}
</style>