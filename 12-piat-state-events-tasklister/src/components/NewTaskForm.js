import React, { useState } from "react";

function NewTaskForm({ categories, onAddTask }) {

  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const formOptions = categories.map((category) => <option key={category} value={category}>{category}</option>)

  function handleSubmit(e){
    e.preventDefault()
    onAddTask({ text, category}) // compose new task object, uses ES6 shorthand for { text: text, category: category}
    setText("")
    setCategory("Code")
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={e => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={category} 
          onChange={e => setCategory(e.target.value)}
        >
          {formOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
