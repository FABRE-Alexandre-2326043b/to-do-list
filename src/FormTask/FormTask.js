import React from "react";
import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import Popup from 'reactjs-popup';
import '../App.css';

export default function FormTask() {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState(false);
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);


    var listCategories = (
        <div>
          <label>Catégorie</label>
          <br />
          <select value={text2} onChange={(e) => setText2(e.target.value)}>
            <option value="">--Please choose an option--</option>
            {currentTodo.categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>
      );

return (
    <div>
        <Popup
    trigger={<button>Ajouter une tâche</button>}
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
                <br/>{listCategories}
                <p>Date d'échéance<br/><input value={text3} onChange={e => setText3(e.target.value)}/></p>
                <p>Description<br/><input value={text4} onChange={e => setText4(e.target.value)}/></p>
                <p>Urgent<input type="checkbox" onChange={(e) => (setText5(e.target.checked))} /></p>

                <button onClick={() => {
                    var d = Date.now();
                    let dtf = new Intl.DateTimeFormat("fr", {
                        dateStyle: "short",
                        });
                    const todo = {
                        id: currentTodo.taches.length + 101,
                        title: text,
                        date_echeance: text3,
                        date_creation: dtf.format(d),
                        description: text4,
                        urgent: text5
                    };
                    const newRelation = {
                        tache : currentTodo.taches.length + 101,
                        categorie : Number(text2)
                    }
                    const newTodos = {...currentTodo};  
                    newTodos.taches = [...newTodos.taches,todo];
                    newTodos.relations = [...newTodos.relations,newRelation]
                    setCurrentTodo(newTodos);
                    setText('');
                    setText2('');
                    setText3('');
                    setText4('');
                    setText5(true);
                    }}>Ajouter</button>
            </div>
        </Popup>        
    </div>
);
}

export {FormTask};