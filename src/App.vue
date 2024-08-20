<template>
  <div class="container">
    <h1>Список дел</h1>
    <todoForm @add-todo="addTodo"></todoForm>
    <todoList @delete-todo="removeTodo" :todos="todos" />
  </div>
</template>

<script setup>
  import todoForm from "./components/todoform.vue";
  import todoList from "./components/todos.vue";
  import {ref} from "vue";

  const todos = ref(JSON.parse(localStorage.getItem('todolist')) || []);

  const addTodo = elem => {
    let id = todos.value.length > 0 ? todos.value[todos.value.length - 1].id + 1 : 1;
    
    todos.value.push({
      id,
      title : elem.title,
      text : elem.text
    });

    localStorage.setItem('todolist', JSON.stringify(todos.value));
  }

  const removeTodo = id => {
    todos.value = todos.value.filter(el => el.id !== id);
    localStorage.setItem('todolist', JSON.stringify(todos.value));
  }
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: auto;
  }

  h1 {
    font-family: sans-serif;
  }
</style>