import React from "react";

function useLocalStorage (itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
    React.useEffect(() => {
      setTimeout(() => {
        try  {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
      }
      }, 2000);

    });


  
    const saveItem = (NewItem) => {
      localStorage.setItem(itemName,JSON.stringify(NewItem));
      setItem(NewItem);
    }
  
    return {item, saveItem, loading, error};
  }
  

  export {useLocalStorage};
  
  // const defaultTodos = [
  //   {text: 'Cortar cebolla', completed: true},
  //   {text: 'Pelar patatas', completed: false},
  //   {text: 'Rallar Zanahoria', completed: true},
  //   {text: 'Cortar tomates', completed: false},
  //   {text: 'Pasear el perro', completed: false},
  //   {text: 'Bañar al gato', completed: true},
  //   {text: 'Saludar a vecino', completed: true},
  //   {text: 'Acogotar el ganso', completed: false}
  // ];
  
  // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));