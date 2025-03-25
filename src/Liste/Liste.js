import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { ConfigContext } from '../ConfigContext/ConfigContext';

function Liste(){
    const data = useContext(TodoContext);
    const config = useContext(ConfigContext);

    var listProgressing;

    if (config["filterProgressing"]){
        listProgressing = data["taches"].filter(t => !t.done).map(tache =><tr key = {tache["id"]}><td><input type="checkbox"/> {tache["title"]} </td><td> {data["categories"].find((c) => c["id"] === data["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);
    }else {
        listProgressing = data["taches"].map(tache =><tr key = {tache["id"]}><td><button> Done </button> {tache["title"]} </td><td> {data["categories"].find((c) => c["id"] === data["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);

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