<script setup>
    import { ref } from 'vue';

    defineProps(["intMat","contMat"]);

    const emit = defineEmits(["choixMAT"]);

    let cont = ref("uuuuuuuuuu");
</script>

<template>
    <tr>
        <td><input type="text" v-="intMat"/></td>
        <td><input type="text" v-model="cont"/></td>
    </tr>
</template>