import Actions from './Actions';
const TodoList = ()=>{
  const actionHandler = (action:string)=>{
    console.log(action);
  }
  return (
    <>
      Todo List
      <Actions actionHandler={actionHandler}/>
    </>
  )
}

export default TodoList;
