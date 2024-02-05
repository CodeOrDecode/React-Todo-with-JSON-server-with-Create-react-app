import "../App.css"
function Taskitem({title,assignee,priority,isCompleted,updateTask,id,deleteTask}) {
  return (
    <div className="styleone">
      <p>Title :{title}</p>
      <p>Assignee : {assignee}</p>
      <p>Priority : {priority}</p>
      <p>
        Task completed :
        <span className={isCompleted ? "green" : "red"}>
          {isCompleted ? "Yes" : "No"}
        </span>
      </p>
      <button onClick={()=>{deleteTask(id)}}>Delete</button>
      <button onClick={()=>{updateTask(id,isCompleted)}}>Update Task</button>
    </div>
  );
}

export default Taskitem;
