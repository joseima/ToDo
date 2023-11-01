function TodoCounter({total, completed}) {
    return(
      <h1 className="TodoCounter">
        Has competado <span>{completed}</span> de <span>{total}</span> tareas
      </h1>
    );
  }


  export  { TodoCounter };