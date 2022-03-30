<template>
  <div class="panell">
     <p>Nombre de pàgines 
    <InputPanell 
     :value="pagines" 
     @sumaInputPanell="sumaTotalPagines" 
     @restaInputPanell="restaTotalPagines"
     @InputPanell="actualPagines"/>
     <b-button @click="$bvModal.show('modal-scoped')"><img src="@/assets/info_about_information_icon_132735.svg" alt=""> </b-button>
        <b-modal id="modal-scoped">
            <p>Modal Body with button</p>
        </b-modal>
     </p> 

     <p>Nombre d'idiomes  
    <InputPanell 
     :value="idiomes" 
     @sumaInputPanell="sumaTotalIdiomes" 
     @restaInputPanell="restaTotalIdiomes"
     @InputPanell="actualIdiomes"/> 
     <b-button @click="$bvModal.show('modal-scoped')">i</b-button>
        <b-modal id="modal-scoped">
            <p>Modal Body with button</p>
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
p{
    display: flex;
    align-items: center;
}
.panell{
    display: inline-block;
    border: 3px solid #718096;
    padding: 1rem;
    border-radius: 1rem;
}
img{
    height: 1rem;
    width: 1rem;
    background-color: white;
}
</style>