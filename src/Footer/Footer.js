import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';


function Footer(){
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

    return(
        <footer>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                var d = Date.now();
                let dtf = new Intl.DateTimeFormat("fr", {
                    dateStyle: "short",
                  });
                const todo = {
                    id: currentTodo.taches.length + 101,
                    title: text,
                    date_echeance: dtf.format(d)
                };
                const newRelation = {
                    tache : currentTodo.taches.length + 101,
                    categorie : 201
                }
                const newTodos = {...currentTodo};  
                newTodos.taches = [...newTodos.taches,todo];
                newTodos.relations = [...newTodos.relations,newRelation]
                setCurrentTodo(newTodos);
                setText('');
                console.log(currentTodo);
            }}>Ajouter une tâche</button><br/>
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
        </footer>
        )
}

export {Footer};