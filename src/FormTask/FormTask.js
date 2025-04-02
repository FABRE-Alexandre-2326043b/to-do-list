import React from "react";
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import { TodoContext } from '../TodoContext/TodoContext';
import '../App.css';

export default function FormTask(props) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

    function close() {
        props.modalElement.current.style.display = 'none';
    }
    
    function open() {
        props.modalElement.current.style.display = 'block';
    }

    useEffect(() => {
        props.buttonOpen.current.onclick = open;
    });

return (
    <div>
        <h1>Ajouter une tâche</h1>
        <form id='taskForm' onSubmit={() => {
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
                close();
            }}>
            <p>Titre<br/><input value={text} onChange={e => setText(e.target.value)} name="title" required="required"/></p>
            <p>Catégorie<br/><input value={text2} onChange={e => setText2(e.target.value)} name="categorie" required="required"/></p>
            <p>Date d'échéance<br/><input value={text3} onChange={e => setText3(e.target.value)} name="date_echeance" required="required"/></p>
            <div id="buttons">
                <button type="submit">OK</button>
                <button type="button" onClick={close}>Cancel</button>
            </div>
        </form>
    </div>
);
}

export {FormTask};