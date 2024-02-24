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
          <button
            @click="showDeleteConfirmation(task.id)"
            class="btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <p>Are you sure you want to delete?</p>
        <div class="modal-buttons">
          <button @click="confirmDelete" class="btn-primary mr-2">Yes</button>
          <button @click="cancelDelete" class="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
    darkMode: Boolean,
  },
  data() {
    return {
      showDeleteModal: false,
      taskIdToDelete: null,
    };
  },
  methods: {
    editTask(task) {
      this.$emit("editTask", task);
    },
    showDeleteConfirmation(taskId) {
      this.taskIdToDelete = taskId;
      this.showDeleteModal = true;
    },
    confirmDelete() {
      this.$emit("deleteTask", this.taskIdToDelete);
      this.hideDeleteConfirmation();
    },
    cancelDelete() {
      this.hideDeleteConfirmation();
    },
    hideDeleteConfirmation() {
      this.showDeleteModal = false;
      this.taskIdToDelete = null;
    },
  },
};
</script>

<style scoped>
/* Add some basic styling for the modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
