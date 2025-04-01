import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';


function Footer(){
    const [text, setText] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

    return(
        <footer>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                const todo = {
                    id: currentTodo.taches.length + 101,
                    text: text
                };
                const newRelation = {
                    tache : currentTodo.taches.length + 101,
                    categorie : 203
                }
                const newTodos = {...currentTodo};  
                newTodos.taches = [...newTodos.taches,todo];
                newTodos.relations = [...newTodos.relations,newRelation]
                setCurrentTodo(newTodos);
                setText('');
                console.log(currentTodo);
            }}>Ajouter</button>
        </footer>
        )
}

export {Footer};