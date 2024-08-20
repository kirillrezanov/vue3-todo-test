<template>
    <div class="form">
        <input type="text" v-model="elem.title" placeholder="Заголовок"><br>
        <textarea name="" v-model="elem.text" placeholder="Текст"></textarea>
        <button @click="confirmChanges">Применить</button>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    const props = defineProps(['elem']);
    const emit = defineEmits(['confirm-todo', 'confirm-changes']);

    const confirmChanges = () => {
        if(props.elem.title && props.elem.text) {
            emit('confirm-changes', props.elem);
        }
    }
</script>

<style scoped>
    input, textarea {
        width: 100%;
        border: 1px solid #d5d5d5;
        border-radius: 8px;
        color: #333;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    button {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #333;
        background-color: #fff;
        cursor: pointer;
    }

    .form {
        margin-bottom: 15px;
    }
</style>