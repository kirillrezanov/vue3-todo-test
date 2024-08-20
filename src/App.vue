<template>
  <div class="container">
    <h1>Список дел</h1>
    <todoForm @confirm-todo="todos.addTodo"></todoForm>
    <todoList @delete-todo="todos.removeTodo" :todos="todos.todos" @confirm-changes="todos.confirmChanges"/>
  </div>
  <notificationsList :notifications="notifications"></notificationsList>
</template>

<script setup>
  import todoForm from "./components/todoform.vue";
  import todoList from "./components/todos.vue";
  import notificationsList from "./components/notifications.vue";
  import { todosStore } from '../stores/todosStore'
  import { notificationsStore } from '../stores/notificationsStore'
  import {ref} from "vue";

  const todos = todosStore();
  const notifications = notificationsStore();  
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