import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post("/api/tasks", { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.error("Failed to create task", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/tasks/${id}`, { status });
      fetchTasks();
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete this task?")) return;

    try {
      await api.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Tasks</h1>

        {/* Create Task */}
        <form
          onSubmit={createTask}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8 space-y-4"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>

        {/* Task List */}
        {loading ? (
          <p className="text-gray-400">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-gray-400">No tasks yet. Add one above.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  {task.description && (
                    <p className="text-sm text-gray-400">
                      {task.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateStatus(task._id, e.target.value)
                    }
                    className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>

                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-red-400 hover:text-red-500 transition"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
