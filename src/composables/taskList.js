// taskList.js
import { reactive, toRefs } from "vue";

export function useTaskList() {
  const state = reactive({
    tasks: [
      { id: 1, title: "Task 1", description: "Description 1" },
      { id: 2, title: "Task 2", description: "Description 2" },
    ],
    editingTask: null,
  });

  const addTask = (task) => {
    state.tasks.push(task);
  };

  const editTask = (task) => {
    state.editingTask = task;
  };

  const updateTask = (updatedTask) => {
    const index = state.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
      state.editingTask = null;
    }
  };

  const deleteTask = (taskId) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.editingTask = null;
    }
  };

  return toRefs(state);
}
