# 📝 Task Tracker

A dynamic, fully-featured task management application built with React, styled with Tailwind CSS, and powered by robust state management utilities to create a seamless user experience.

## 🚀 Features

*   **Add Task:** Create new tasks instantly with clean title and description fields using React refs.
*   **View Task:** Dive into task specifics through dynamic routing views.
*   **Edit Task:** Modify task details smoothly with real-time updates across the app UI.
*   **Delete Task:** Clean up old or unwanted records instantly from your list.
*   **Mark Status:** Seamlessly toggle task status between **Pending** and **Done** with custom visual indicators.

## 🛠️ Tech Stack & Concepts

*   **Frontend Library:** React
*   **Styling:** Tailwind CSS (Custom borders, state-driven visual feedback, layouts)
*   **Routing:** React Router (Dynamic path transitions, single task views)
*   **State Management Utilities:**
    *   `useReducer`: Manages complex data state logic (adding, editing, deleting records cleanly).
    *   `useContext`: Implements global state distribution to prevent prop-drilling.
    *   `useState`: Controls isolated local UI states (toggles, forms, inline editing states).
    *   `useRef`: Uncontrolled form inputs processing for high-performance typing fields.

## 💻 Installation & Setup

Follow these quick steps to get a local copy of this application running on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**
   ```bash
   cd task-tracker
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📂 Project Logic 

*   **`store/AllFunction.jsx`**: Centralized state management module distributing task contexts, state manipulation dispatchers, and state hooks (`useReducer`, `useContext`) globally.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
