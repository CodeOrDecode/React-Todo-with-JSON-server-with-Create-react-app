import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Taskitem from "./components/Taskitem";
import Addtask from "./components/Addtask"
import "./App.css"
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)


  async function getData() {
    setLoading(true);
    try {
      let res = await fetch(`http://localhost:3001/tasks`);
      let finalData = await res.json();
      setData(finalData);
      console.log(finalData);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }


  async function updateTask(id, iscompleted) {
    let obj = { isCompleted: !iscompleted }
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    getData();
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE"
    })
    getData();
  }

  async function addNewData(data) {

    await fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })

    getData();

  }

  useEffect(() => {
    getData();
  }, [])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <div>
      <Addtask addNewData={addNewData} />
      <h1>Task List</h1>
      {data.map((ele) => {
        return <Taskitem key={ele.id} {...ele} updateTask={updateTask} deleteTask={deleteTask} />
      })}

    </div>
  );
}

export default App;
