<template>
  <div>
    <header>
      <h3
        class="text-3xl font-bold mb-4 text-primary text-left px-4 py-4 dark:text-white"
      >
        Task Tracker
      </h3>
      <ToggleDarkMode class="text-right absolute top-5 right-5" />
    </header>

    <div class="md:flex">
      <div class="md:w-1/2 pr-4">
        <TaskList
          :tasks="tasks"
          @editTask="editTask"
          @deleteTask="deleteTask"
        />
      </div>

      <div class="md:w-1/2 pl-4 md:pl-0 mt-4 md:mt-0">
        <AddTaskForm @addTask="addTask" />
        <EditTaskForm
          v-if="editingTask"
          :darkMode="isDarkMode"
          :task="editingTask"
          @updateTask="updateTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ToggleDarkMode from "./components/ToggleDarkMode.vue";
import TaskList from "./components/TaskList.vue";
import AddTaskForm from "./components/AddTaskForm.vue";
import EditTaskForm from "./components/EditForm.vue";

export default {
  name: "App",
  components: {
    ToggleDarkMode,
    TaskList,
    AddTaskForm,
    EditTaskForm,
  },
  setup() {
    const tasks = ref([
      {
        id: 1,
        title: "Morning Routine",
        description: "Making Coffee,Exercise",
      },
      {
        id: 2,
        title: "Night Rotine",
        description: "Cooking a Meal,Reading a Book",
      },
    ]);

    const editingTask = ref(null);

    const addTask = (task) => {
      tasks.value.push(task);
    };

    const editTask = (task) => {
      editingTask.value = task;
    };

    const updateTask = (updatedTask) => {
      const index = tasks.value.findIndex((t) => t.id === updatedTask.id);
      if (index !== -1) {
        tasks.value.splice(index, 1, updatedTask);
        editingTask.value = null;
      }
    };

    const deleteTask = (taskId) => {
      const confirmed = window.confirm("Are you sure you want to delete?");
      if (confirmed) {
        tasks.value = tasks.value.filter((task) => task.id !== taskId);
        editingTask.value = null;
      }
    };

    return { tasks, editingTask, addTask, editTask, updateTask, deleteTask };
  },
};
</script>

<style>
:root {
  --primary-color: #3490dc;
  --secondary-color: #38a169;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* dark mode styles */
.dark {
  background-color: #1a202c;
  color: white;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.text-primary {
  color: var(--primary-color);
}

.text-secondary {
  color: var(--secondary-color);
}

/* Responsive */
@media screen and (max-width: 768px) {
  .md\:flex {
    flex-direction: column;
  }

  .md\:w-1 {
    width: 100%;
  }

  .md\:pl-0 {
    padding-left: 0;
  }
}
</style>
