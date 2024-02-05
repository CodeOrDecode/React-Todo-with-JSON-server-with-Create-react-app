import { useState } from "react";

function Addtask({ addNewData }) {
  const [formstate, setFormstate] = useState({
    title: "",
    isCompleted: false,
    assignee: "",
    priority: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    addNewData(formstate);
    setFormstate({ title: "", isCompleted: false, assignee: "", priority: "" });
  }
  function handleChange(event) {
    let newValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.name === "priority"
        ? +event.target.value
        : event.target.value;

    setFormstate({ ...formstate, [event.target.name]: newValue });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="enter task"
          value={formstate.title}
          name="title"
          onChange={handleChange}
        />

        <select
          value={formstate.assignee}
          name="assignee"
          onChange={handleChange}
        >
          <option value="">Select Assignee</option>
          <option value="John">John</option>
          <option value="Ron">Ron</option>
          <option value="Kon">Kon</option>
        </select>

        <select
          value={formstate.priority}
          name="priority"
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <span>Task completed</span>
        <input
          type="checkbox"
          checked={formstate.isCompleted}
          name="isCompleted"
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Addtask;
