import { defineStore } from 'pinia';
import {ref} from "vue";

export const todosStore = defineStore('todos', () => {
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

    const confirmChanges = elem => {
        todos.value.forEach(el => {
            if(el.id == elem.id) el = elem;
        });

        elem.isEditing = false;

        localStorage.setItem('todolist', JSON.stringify(todos.value));
    }

    const removeTodo = id => {
        todos.value = todos.value.filter(el => el.id !== id);
        localStorage.setItem('todolist', JSON.stringify(todos.value));
    }

    return {todos, addTodo, confirmChanges, removeTodo}
});