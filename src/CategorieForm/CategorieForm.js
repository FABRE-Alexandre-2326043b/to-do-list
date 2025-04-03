import React from "react";
import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import Popup from 'reactjs-popup';
import '../App.css';

export default function CategorieForm() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

return (
    <div>
        <Popup
    trigger={<button>Ajouter une catégorie</button>}
    position="right center"
    contentStyle={{
      width: '300px',
      padding: '20px',
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
    }}
  >
            <div>
                <p>Titre<br/><input value={text} onChange={e => setText(e.target.value)}/></p>
                <p>Description<br/><input value={text2} onChange={e => setText2(e.target.value)}/></p>
                <p>Couleur<br/><input value={text3} onChange={e => setText3(e.target.value)}/></p>
                <button onClick={() => {
                    const cat = {
                        id: currentTodo.categories.length + 201,
                        title: text,
                    };
                    const newTodos = {...currentTodo};  
                    newTodos.categories = [...newTodos.categories,cat];
                    setCurrentTodo(newTodos);
                    setText('');
                    setText2('');
                    setText3('');
                    }}>Ajouter</button>
            </div>
        </Popup>        
    </div>
);
}

export {CategorieForm};