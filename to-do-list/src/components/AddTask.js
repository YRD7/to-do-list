import { useState } from "react";
const AddTask = ({onAdd}) => {
  const [text,seText]=useState('')
  // const [state,setState]=useState('')
  const onSubmit=(e)=>{e.preventDefault()
  if(!text){
    alert("please add Task")
    return
      }
    onAdd({text})
    seText('')
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label><b>Task</b></label>
            <input  type="text" placeholder="AddTask" value={text} onChange={(e)=>{seText(e.target.value)}}/>
        </div>
        <input className="btn btn-block"  type="submit" value="Save Task" />
    </form>
  )
}


export default AddTask