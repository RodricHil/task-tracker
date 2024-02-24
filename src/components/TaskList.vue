<template>
  <div :class="{ dark: darkMode }">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
      >
        <h3 class="text-xl font-semibold mb-2 dark:text-white">
          {{ task.title }}
        </h3>
        <p class="dark:text-gray-300">{{ task.description }}</p>
        <div class="mt-2 flex justify-end space-x-2">
          <button @click="editTask(task)" class="btn-primary">Edit</button>
          <button @click="deleteTask(task.id)" class="btn-secondary">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    editTask(task) {
      this.$emit("editTask", task);
    },
    deleteTask(taskId) {
      this.$emit("deleteTask", taskId);
    },
  },
};
</script>

<style scoped>
.dark [type="submit"] {
  background-color: #1a202c !important;
}

.dark input::placeholder,
.dark textarea::placeholder {
  color: #cbd5e0;
}

.dark input:focus,
.dark textarea:focus {
  background-color: #2d3748;
  border-color: #4a5568;
  color: white;
}
</style>
