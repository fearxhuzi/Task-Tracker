# 📝 Task Tracker

A task management app built with React, styled with Tailwind CSS, using Context and useReducer for state management.

## 🚀 Features

- **Add Task:** Create new tasks with a title and description.
- **View Task:** Open a task to see its full details.
- **Edit Task:** Update a task's title and description.
- **Delete Task:** Remove a task from the list.
- **Mark Status:** Toggle a task between **Pending** and **Done**.
- **Persistence:** Tasks are saved to `localStorage`, so they stay after a page refresh.

## 🛠️ Tech Stack & Concepts

- **Frontend Library:** React
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State Management:**
  - `useReducer` — handles adding, editing, deleting, and status updates for tasks
  - `useContext` — shares task state across components without prop-drilling
  - `useState` — manages local UI state
  - `useRef` — handles form inputs
  - `useEffect` — syncs task state with `localStorage`

## 💻 Installation & Setup

1. **Clone the repository:**

```
git clone https://github.com/fearxhuzi/Task-Tracker.git
```

2. **Navigate into the project directory:**

```
cd Task-Tracker
```

3. **Install the dependencies:**

```
npm install
```

4. **Start the development server:**

```
npm run dev
```

## 📂 Project Logic

- **`store/AllFunction.jsx`** — Centralized state management module. Handles task data through `useReducer`, distributes task state and actions through `useContext`, and syncs tasks to `localStorage`.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
