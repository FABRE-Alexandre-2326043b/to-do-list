import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Liste(){
    const {currentTodo, currentConfig} = useContext(TodoContext);

    var listProgressing;

    if (currentConfig["filterProgressing"]){
        listProgressing = currentTodo["taches"].filter(t => !t.done).map(tache =><tr key = {tache["id"]}><td><input type="checkbox" value={tache.done} onClick={value => {tache.done=value}}/> {tache["title"]} </td><td> {currentTodo["categories"].find((c) => c["id"] === currentTodo["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);
    }else {
        listProgressing = currentTodo["taches"].map(tache =><tr key = {tache["id"]}><td><input type="checkbox" value={tache.done} onClick={value => {tache.done=value}}/> {tache["title"]} </td><td> {currentTodo["categories"].find((c) => c["id"] === currentTodo["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);

    }

    return (
    <table>
        <thead>
            <tr>
            <th scope="col">Nom de la tâche</th>
            <th scope="col">Catégorie </th>
            <th scope="col">Date d'échéance</th>
            </tr>
        </thead>
        <tbody>{listProgressing}</tbody>
    </table>)
}

export {Liste};