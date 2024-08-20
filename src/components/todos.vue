<template>
    <div v-if="todos.length > 0">
        <div class="todo_elem" v-for="todo in todos" :key="todo.id">
            <div v-if="!todo.isEditing">
                <span class="todo_title">{{todo.title}}</span>
                <span class="todo_text">{{todo.text}}</span>
                <hr>
                <div class="todo_elem_bottom">
                    <img src="../assets/delete.svg" @click="deleteElem(todo.id)" />
                    <img src="../assets/edit.svg" @click="todo.isEditing = true" />
                </div>
            </div>
            <div v-if="todo.isEditing">
                <todoForm :elem="todo" @confirm-changes="confirmChanges"></todoForm>
            </div>
        </div>
    </div>
    <p v-if="todos.length == 0" class="empty">Элементов в списке нет.</p>
</template>

<script setup>
    import {ref} from "vue";
    import todoForm from "@/components/edittodo.vue"

    defineProps(['todos']);
    let emit = defineEmits(['delete-todo', 'confirm-changes']);

    const confirmChanges = elem => {
        emit('confirm-changes', elem);
    }

    const deleteElem = id => {
        if(confirm('Вы точно хотите удалить элемент?')) {
            emit('delete-todo', id);
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        margin: 0;
    }
    
    .todo_elem {
        font-family: sans-serif;
        width: 100%;
        margin-bottom: 10px;
        background-color: #fff;
        box-shadow: 0 0 30px rgba(0,0,0,.2);
        list-style: none;
        padding: 15px;
        border-radius: 8px;
        box-sizing: border-box;
    }

    .todo_elem_bottom {
        display: flex;
        gap: 15px;
        margin-top: 10px;
    }

    .todo_elem_bottom img {
        width: 25px;
    }

    .todo_title {
        font-size: 20px;
        font-weight: 700;
        color: #333;
        display: block;
        margin-bottom: 15px;
    }

    .todo_text {
        font-size: 18px;
        opacity: .8;
        display: block;
    }

    .delete {
        border: 1px solid red;
        color: red;
        background-color: #fff;
        border-radius: 8px;
        padding: 10px 20px;
        margin-top: 10px;
        cursor: pointer;
    }

    .empty {
        font-size: 30px;
        text-align: center;
        color: #333;
        font-weight: 700;
        font-family: sans-serif;
    }

    hr {
        border: none;
        height: 1px;
        background-color: #c5c5c5;;
    }
</style>