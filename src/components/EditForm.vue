<template>
  <div
    :class="{ dark: darkMode }"
    class="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-10 mr-4"
  >
    <h2 class="text-2xl font-bold mb-4 text-primary dark:text-white">
      Edit Task
    </h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label
          for="title"
          class="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >Title:</label
        >
        <input
          v-model="editedTask.title"
          type="text"
          class="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="description"
          class="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >Description:</label
        >
        <textarea
          v-model="editedTask.description"
          class="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="btn-primary bg-primary text-white px-4 py-2 rounded-md dark:bg-blue-500"
        >
          Update Task
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    darkMode: Boolean,
  },
  data() {
    return {
      editedTask: { ...this.task },
    };
  },
  methods: {
    submitForm() {
      this.$emit("updateTask", this.editedTask);
    },
  },
};
</script>

<style>
/* Dark mode styles */
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

[type="submit"] {
  background-color: #3490dc !important;
}
</style>
