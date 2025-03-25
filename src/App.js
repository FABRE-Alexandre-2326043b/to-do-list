import './App.css';
import { Header } from './Header/Header';
import { Todo } from './Todo/Todo';
import { Footer } from './Footer/Footer';
import { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import { ConfigContext } from './ConfigContext/ConfigContext';

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

  const data = useContext(TodoContext);
  const config = useContext(ConfigContext);

  const [todos, setTodos] = useState(data);
  const [currentConfig, setCurrentConfig] = useState(config);

  return (
    <div className="App">
      <TodoContext.Provider value={{todos, setTodos}}>
        <ConfigContext.Provider value={{currentConfig, showAll, showProgressing}}>
          <Header/>
          <Todo/>
          <Footer/>
        </ConfigContext.Provider>        
      </TodoContext.Provider>      
    </div>
  );
}

export default App;
