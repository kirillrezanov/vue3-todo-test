<template>
    <div class="notifications">
        <div :class="['notification', notification.type]" v-for="notification in notifications">{{notification.message}}</div>
    </div>
</template>

<script setup>
    import {ref} from "vue";

    let props = defineProps(['notifications']);
</script>

<style scoped>
    .notifications {
        position: fixed;
        bottom: 30px;
        left: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .notification {
        padding: 15px;
        border-radius: 8px;
    }

    .success {
        background-color: green;
        color: #fff;
    }
</style>