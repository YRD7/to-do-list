import Task from "./Task";
const Tasks = ({ tasks, onDelete, onMark }) => {
  return (
    <>
      {" "}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onMark={onMark} />
      ))}
    </>
  );
};

export default Tasks;
