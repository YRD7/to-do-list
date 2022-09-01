import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import {useState} from "react"
import Tasks from './components/Tasks';
import TaskCounter from './components/TaskCounter';

function App() {
  //states
  const [tasks,setTasks]=useState([
    
  ])
  //delete Task
  const deleteTask=(id)=>{
   setTasks(tasks.filter((task)=>task.id!=id))
  }
  //creating a  task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const state=false
    const newTask = {id,state,...task,state}
    setTasks([...tasks,newTask])
  }
  //adding imp mark onclick (color change)
  const markImportant=(task,target)=>{
    if(task.state==false){
    target.target.style.color="#FEDD00"
    task.state=true
    }
    else{
    target.target.style.color=""
    task.state=false
    }
  }
  return (
    //outerbody
    <div className='containerbody'>
  {
    // header container
  }
    <div className='container'>
    <Header/>
    </div>
    <div className='counter'><TaskCounter taskLength={tasks.length}/></div>
    <AddTask onAdd={addTask}/>
    {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onMark={markImportant}/>):("Please create a task")}
    
    </div>
  );
}

export default App;
