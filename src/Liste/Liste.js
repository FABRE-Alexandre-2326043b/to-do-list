import data from '../data.json';

function Liste(){
    var listProgressing = data["taches"].filter(t => !t.done).map(tache =><tr key = {tache["id"]}><td><input type="checkbox"/> {tache["title"]} </td><td> {data["categories"].find((c) => c["id"] === data["relations"].find((r) => r["tache"] === tache["id"])["categorie"])["title"]}</td><td> {tache["date_echeance"]} </td></tr>);
    return (
    <table>
        <thead>
            <tr>
            <th scope="col">Nom de la tâche</th>
            <th scope="col">Catégorie </th>
            <th scope="col">Date d'échéance</th>
            </tr>
        </thead>
        <tbody id="list">{listProgressing}</tbody>
    </table>)
}

export {Liste};