import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { FormTask } from '../FormTask/FormTask';
import { useRef } from "react";



function Footer(){
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

    const buttonOpen = useRef(null);
    const modalElement = useRef(null);

    return(
        <footer>
            <button ref={buttonOpen}>Ajouter une tâche</button>
            <div id="taskModal" ref={modalElement}>
                <FormTask buttonOpen={buttonOpen} modalElement={modalElement}/><br/>               
            <input
                value={text2}
                onChange={e => setText2(e.target.value)}
            />
            <button onClick={() => {
                const cat = {
                    id: currentTodo.categories.length + 201,
                    title: text2,
                };
                const newTodos = {...currentTodo};  
                newTodos.categories = [...newTodos.categories,cat];
                setCurrentTodo(newTodos);
                setText2('');
                console.log(currentTodo);
            }}>Ajouter une catégorie</button>
            </div>

        </footer>
        )
}

export {Footer};