<template>  
    <div>
        <div class="btn">
            <button class="suma" @click="suma()">+</button>
            <input type="number" v-model="value">
            <button @click="resta()">-</button>
        </div>  
    </div> 
</template>



<script>
export default {
    name: 'InputPanell',
    props:{
        value: Number,
    },
    methods: {
        suma: function(){
            this.$emit("sumaInputPanell", this.value)
        },
        resta: function(){
            this.$emit("restaInputPanell", this.value)
        }
    },
    watch: {
        value: function () {
        this.$emit("InputPanell", this.value)
        }
    }
}
</script>



<style scoped>
.pagines{
    display: flex;
}
.idiomes{
    display: flex;
}
button {
    font-family:monospace;
    font-weight: 900;
    font-size: 1.3rem;  
    border-radius: 5px;
    color: white;
    text-decoration: none;
    background-color: #89bfd8;
    border: none;
    width: 1.7rem;
}
.suma{
    margin-left: 0.5rem;
}
input{
    border: none;
    width: 2rem;    
    font-size: 1rem;
    text-align: center;
    -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>