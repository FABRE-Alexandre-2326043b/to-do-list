import './App.css';
import { Header } from './Header/Header';
import { Todo } from './Todo/Todo';
import { Footer } from './Footer/Footer';
import { useState } from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import data from './data.json';
import config from './config.json'


function App() {
  function showAll(){
    const newConfig = {...currentConfig};  
    newConfig.filterProgressing = false;
    setCurrentConfig(newConfig);
  }

  function showProgressing(){
    const newConfig = {...currentConfig};  
    newConfig.filterProgressing = true;
    setCurrentConfig(newConfig);
  }

  const [currentConfig, setCurrentConfig] = useState(config);
  const [currentTodo, setCurrentTodo] = useState(data);

  return (
    <div className="App">
      <TodoContext value={{data, showAll, currentTodo, setCurrentTodo, tasksReducer, currentConfig, setCurrentConfig, showProgressing}}>
        <Header/>
        <Todo/>
        <Footer/>  
      </TodoContext>      
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      const todo = {
        id: action.id,
        text: action.text,
        done: false
      };
      const newTodos = {...tasks};  
      newTodos.taches = [...newTodos.taches,todo];
      return newTodos;
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default App;
