import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")
  // const filteredTasks = tasks.filter(task => {
  //   if (selectedCategory === "All") return true
  //   return task.category === selectedCategory
  // })

  function handleAddTask(newTask) {
    console.log("🚀 ~ file: App.js:22 ~ handleAddTask ~ newTask", newTask)
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")}
        onAddTask={handleAddTask}
      />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
