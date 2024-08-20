<template>
    <div class="form">
        <input type="text" v-model="todoTitle" placeholder="Заголовок"><br>
        <textarea name="" v-model="todoText" placeholder="Текст"></textarea>
        <button @click="addTodo">Добавить</button>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    let todoTitle = ref("");
    let todoText = ref("");
    const emit = defineEmits(['confirm-todo']);

    const addTodo = () => {
        if(todoTitle.value && todoText.value) {
            emit('confirm-todo', {title : todoTitle.value, text : todoText.value});
            todoTitle.value = "";
            todoText.value = "";
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