<template>
  <div class="container">
    <h1>Список дел</h1>
    <todoForm @confirm-todo="addTodo"></todoForm>
    <todoList @delete-todo="removeTodo" :todos="todos" @confirm-changes="confirmChanges"/>
  </div>
  <notificationsList :notifications="notifications"></notificationsList>
</template>

<script setup>
  import todoForm from "./components/todoform.vue";
  import todoList from "./components/todos.vue";
  import notificationsList from "./components/notifications.vue";
  import {ref} from "vue";

  const todos = ref(JSON.parse(localStorage.getItem('todolist')) || []);
  const notifications = ref([]);

  const showNotification = (message, type) => {
    if(notifications.value.length > 3) {
      notifications.value.shift();
    }

    notifications.value.push({
      message,
      type,
      time : Date.now()
    });
  }

  const addTodo = elem => {
    let id = todos.value.length > 0 ? todos.value[todos.value.length - 1].id + 1 : 1;
    
    todos.value.push({
      id,
      title : elem.title,
      text : elem.text
    });

    localStorage.setItem('todolist', JSON.stringify(todos.value));

    showNotification("Элемент добавлен успешно", "success");
  }

  const confirmChanges = elem => {
    todos.value.forEach(el => {
      if(el.id == elem.id) el = elem;
    });

    elem.isEditing = false;
    showNotification("Элемент изменен успешно", "success");

    localStorage.setItem('todolist', JSON.stringify(todos.value));
  }

  const removeTodo = id => {
    todos.value = todos.value.filter(el => el.id !== id);
    localStorage.setItem('todolist', JSON.stringify(todos.value));
    showNotification("Элемент удалён успешно", "success");
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