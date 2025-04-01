import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Liste(){
    const {currentTodo, currentConfig} = useContext(TodoContext);

    var listTasks = currentTodo.taches.copyWithin(0);

    if(currentConfig["nbCategories"]){
        listTasks = listTasks.filter(tache => currentTodo["relations"].find((r) => r["tache"] === tache["id"])["categorie"] < 203);
    }
    if (currentConfig["filterProgressing"]){
        listTasks = listTasks.filter(t => !t.done);
    }else{
        listTasks = currentTodo.taches.copyWithin(0);
    }
    if(currentConfig["sort"] === "date d'échéance décroissante"){
        listTasks = listTasks.sort((e1, e2) => {
            return e1.date_echeance > e2.date_echeance ? 1 : -1
        })
    }
         
    listTasks = listTasks.map(tache =><tr key = {tache["id"]}><td><input type="checkbox" value={tache.done} onClick={value => {tache.done=value}}/> {tache["title"]} </td><td> {currentTodo["categories"].find((c) => c["id"] === currentTodo["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);

    return (
    <table>
        <thead>
            <tr>
            <th scope="col">Nom de la tâche</th>
            <th scope="col">Catégorie </th>
            <th scope="col">Date d'échéance</th>
            </tr>
        </thead>
        <tbody>{listTasks}</tbody>
    </table>)
}

export {Liste};