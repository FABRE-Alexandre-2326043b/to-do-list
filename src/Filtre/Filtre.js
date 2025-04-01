import { Done } from '../Done/Done.js';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Filtre() {
    const { currentTodo, setCurrentTodo } = useContext(TodoContext);

    function alphaSort(e1, e2) {
        return e1.title > e2.title ? 1 : -1
    }

    function alphabetSort() {
        const newTodos = { ...currentTodo };
        newTodos.taches = [...newTodos.taches.sort((a, b) => {
            return alphaSort(a, b)
        })]
        setCurrentTodo(newTodos);
    }

    function creaSort(e1, e2) {
        return e1.date_creation > e2.date_creation ? 1 : -1
    }

    function creationSort() {
        const newTodos = { ...currentTodo };
        newTodos.taches = [...newTodos.taches.sort((a, b) => {
            return creaSort(a, b)
        })]
        setCurrentTodo(newTodos);
    }

    function echeSort(e1, e2) {
        return e1.date_echeance > e2.date_echeance ? 1 : -1
    }

    function echeanceSort() {
        const newTodos = { ...currentTodo };
        newTodos.taches = [...newTodos.taches.sort((a, b) => {
            return echeSort(a, b)
        })]
        setCurrentTodo(newTodos);
    }

    return (
        <div>
            <Done />
            <button onClick={alphabetSort}>Tri alphabétique</button>
            <button onClick={creationSort}>Tri par création</button>
            <button onClick={echeanceSort}>Tri par échéance</button>
        </div>
    )
}

export { Filtre };