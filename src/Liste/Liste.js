import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Liste(){
    const { currentTodo, currentConfig } = useContext(TodoContext);
    var desc;

    var listTasks = [...currentTodo.taches]; 

    if (currentConfig["filter"] === "échéance passée depuis une semaine") {
        listTasks = listTasks.filter(t => (new Date(t.date_echeance) - Date.now()) > 604800000);
    }

    if (currentConfig["nbCategories"]) {
        listTasks = listTasks.filter(tache => {
            const relation = currentTodo["relations"].find(r => r["tache"] === tache["id"]);
            return relation?.["categorie"] < 203;
        });
    }

    if (currentConfig["filterProgressing"]) {
        listTasks = listTasks.filter(t => !t.done);
        desc = "";
    }else{
        listTasks = [...currentTodo.taches];
        desc = <th scope="col">Description</th>;
    }

    if (currentConfig["sort"] === "date d'échéance décroissante") {
        listTasks = listTasks.sort((e1, e2) => new Date(e2.date_echeance) - new Date(e1.date_echeance));
    }
    listTasks = listTasks.filter(tache => tache && tache.title); 

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Nom de la tâche</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Date d'échéance</th>
                    {desc}
                </tr>
            </thead>
            <tbody>
                {listTasks.map(tache => {
                    const relation = currentTodo["relations"].find((r) => r["tache"] === tache["id"]);
                    const categorieId = relation?.["categorie"];
                    const categorie = currentTodo["categories"].find((c) => c["id"] === categorieId);
                    const categorieTitle = categorie?.["title"] ?? "Catégorie inconnue";           

                    return (
                        <tr key={tache.id}>
                            <td>
                                <input type="checkbox" checked={tache.done} onChange={(e) => (tache.done = e.target.checked)} />
                                {tache.title ?? "Titre non disponible"}
                            </td>
                            <td>{categorieTitle}</td>
                            <td>{tache.date_echeance}</td>
                            <td>{currentConfig["filterProgressing"] ? "" : tache.description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export { Liste };
