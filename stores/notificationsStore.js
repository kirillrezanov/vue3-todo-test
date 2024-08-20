import { defineStore } from 'pinia';
import {ref} from "vue";

export const notificationsStore = defineStore('todos', () => {
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

    return {notifications, showNotification}
});