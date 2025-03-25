import { useState } from 'react';
import data from '../data.json';

function Footer(){
    const [todos, setTodos] = useState(data);
    const [text, setText] = useState('');
    const addTask = () => {
    const todo = {
        id: todos.length,
        text: text
    };
    const newTodos = {...todos};  
    newTodos.taches = [...newTodos.taches,todo];
    setTodos(newTodos);
    setText('');
    console.log(todos);
    }

    return(
        <footer>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </footer>
    )
}

export {Footer};