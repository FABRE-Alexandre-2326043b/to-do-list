import './App.css';
import data from './data.json';

function App() {
  var listProgressing = data["taches"].filter(t => !t.done).map(tache => <tr key = {tache["id"]}> <td> <input type="checkbox"/> {tache["title"]} </td> <td> {data["categories"].find((c) => c["id"] == data["relations"].find((r) => r["tache"] == tache["id"])["categorie"])["title"]}</td> <td> {tache["date_echeance"]} </td> </tr>);
  
  return (
    <div className="App">
      <header>
        <h1> To Do amU </h1>
        <h2> {data["taches"].length} tâches, dont {data["taches"].filter(t => !t.done).length} en cours </h2>
        <button>Voir toutes les tâches</button>
        <table>
						<thead>
						  <tr>
							<th scope="col">Nom de la tâche</th>
              <th scope="col">Catégorie </th>
							<th scope="col">Date d'échéance</th>
						  </tr>
						</thead>
						<tbody id="list">{listProgressing}</tbody>
				</table>
      </header>

      <footer>
        <button>Tâche</button>
        <button>Catégorie</button>
      </footer>
    </div>
  );
}

export default App;
