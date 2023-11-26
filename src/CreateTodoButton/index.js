function CreateTodoButton() {
    return(
        <button className="CreateTodoButton" onClick={
            (event)=>{
                console.log('le diste al boton')
                console.log(event.target)
            }} type="button">Create task</button>
    );
  }
  export {CreateTodoButton};