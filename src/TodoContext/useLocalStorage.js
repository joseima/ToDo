import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const initialState = {
    item:  initialValue,
    loading: true,
    error: false,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {error, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({type: actionTypes.error, payload: error});
  const onSuccess = (parsedItem) => dispatch({type: actionTypes.success, payload: parsedItem});
  const onSave = (item) => dispatch({type: actionTypes.success, payload: item});
  // const [item, setItem] = React.useState(initialValue);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          
          //setItem(parsedItem);
        }
        onSuccess(parsedItem);
        //setLoading(false);
      } catch(error) {
        onError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSave(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
}

const reducerObject = (state, payload) => ({
 [actionTypes.error]: {
  ...state,
  error: true,
 },
 [actionTypes.success]: {
  ...state,
  error: false,
  loading: false,
  item: payload,
 },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};


export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
