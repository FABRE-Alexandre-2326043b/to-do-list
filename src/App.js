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
      <TodoContext value={{data, showAll, currentTodo, setCurrentTodo, currentConfig, setCurrentConfig, showProgressing}}>
        <Header/>
        <Todo/>
        <Footer/>  
      </TodoContext>      
    </div>
  );
}

export default App;
