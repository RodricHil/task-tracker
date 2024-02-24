<template>
  <div
    :class="{ dark: darkMode }"
    class="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-10 mr-4"
  >
    <h2 class="text-2xl font-bold mb-4 text-primary dark:text-white">
      Add Task
    </h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label
          for="title"
          class="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >Title:</label
        >
        <input
          v-model="title"
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
          v-model="description"
          class="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="btn-primary bg-primary text-white px-4 py-2 rounded-md dark:bg-blue-500"
        >
          Add Task
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    submitForm() {
      if (this.title && this.description) {
        this.$emit("addTask", {
          id: new Date().getTime(),
          title: this.title,
          description: this.description,
        });

        this.title = "";
        this.description = "";
      }
    },
  },
};
</script>

<style scoped>
/* Dark mode styles */
.dark [type="submit"] {
  background-color: var(--primary-color) !important;
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
