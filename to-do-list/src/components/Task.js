import { RiTaskFill } from 'react-icons/ri'
import { AiFillStar} from 'react-icons/ai'
import CurrentDate from './CurrentDate'
const Task = ({task,onDelete,onMark}) => {
  return (
    <div className="task">
    <h3><AiFillStar onClick={(e)=>{onMark(task,e)}}/>{task.text} <RiTaskFill style={{color:"green"}} onClick ={()=>onDelete(task.id)}/></h3>
    <p><CurrentDate/></p>
    </div>
  )
}

export default Task