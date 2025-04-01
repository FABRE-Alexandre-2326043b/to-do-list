import { Done } from '../Done/Done.js';
import { useContext } from 'react';
import { useState } from 'react';
import React from "react";
import { faFilter, faArrowDownAZ, faClockRotateLeft,faArrowDown19,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    const [text, setText] = useState('');

    function recherche(){
        const newTodos = { ...currentTodo };
        newTodos.taches = [...newTodos.taches.filter(t => text === t.title)]
        setCurrentTodo(newTodos);
    }

    return (
        <div>
            <Done />
            <FontAwesomeIcon icon={faFilter} />
            <button onClick={alphabetSort}><FontAwesomeIcon icon={faArrowDownAZ} />Tri alphabétique</button>
            <button onClick={creationSort}><FontAwesomeIcon icon={faClockRotateLeft} />Tri par création</button>
            <button onClick={echeanceSort}><FontAwesomeIcon icon={faArrowDown19} />Tri par échéance</button><br/>
            <input value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={recherche}><FontAwesomeIcon icon={faMagnifyingGlass} />Rechercher</button>
        </div>
    )
}

export { Filtre };