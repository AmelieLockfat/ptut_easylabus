<script setup>
    import { ref } from 'vue';

    const props = defineProps({code : String, intitule : String, idSem: Number})

    const emit = defineEmits(["annuler","terminer"])

    let code = ref(props.code);
    let intitule = ref(props.intitule);
    let idSem = props.idSem;

    function handlerSubmit (){
        const head=new Headers()
        head.append("Content-Type", "application/json")
        const fetchOptions={method: "POST",
            headers: head,
            body: JSON.stringify({ codeue : code.value ,
                                intituleue : intitule.value })}
        fetch("https://backendeasylabus.azurewebsites.net/api/semestres/AddUe?idsemestre="+idSem, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            emit("terminer");
            console.log(code.value+" "+intitule.value+" "+idSem);
        })
        .catch((error) => console.log(error));
    }
</script>

<template>
    <form class="case" @submit.prevent="handlerSubmit">
        <input type="submit" class="input" id="sub" value="V"/>
        <input type="text" class="input" id="code" v-model="code"/>
        <input type="button" class="input" id="stop" value="X" @click="$emit('annuler')"/>
        <textarea class="input" id="int" v-model="intitule"/>
    </form>
</template>

<style scoped>
  @font-face{
    font-family: 'Roboto-Regular';
    src: url('../assets/Roboto-Regular.ttf') format('truetype');
    src: url('../assets/Roboto-Regular.woff') format('woff');
    src: url('../assets/Roboto-Regular.woff2') format('woff2');
    }

    form {
        display: inline-block; height: 150px; width: 220px;
        border-style: solid; border-width: 10px;
        margin-bottom: 20px; margin-left: 10px; margin-right: 10px; margin-top: 10px; margin-bottom: 20px;
        border-color: rgb(3, 155, 229);
    }
    
    .input {
        font-size: 18px; text-transform: uppercase; font-weight: bold;
        font-family: "Roboto-Regular"; color: rgb(255, 255, 255);
        border-color: rgb(3, 155, 229);
    }

    input {
        border-bottom-style: solid; border-bottom-width: 5px; height: 25px;
    }

    #sub {
        width: 25px;
        border-right-style: solid ; border-right-width: 10px;
    }

    #code {
        position: relative; bottom: 5px;
        width: 150px; text-align: center;
    }

    #stop {
        width: 25px;
        border-left-style: solid ; border-left-width: 10px;
    }

    #int {
        position: relative; bottom: 5px;
        resize: none;
        border-top-style: solid; border-top-width: 5px; height: 103px; width: 200px;
    }
</style>