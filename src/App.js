import logo from './logo.svg';
import './App.css';
import data from './data.json';
function findProgressing(tache) {
    
  }

function App() {
  var listTaches = data["taches"].map(tache => <li key = {tache["id"]}> {tache["title"]}</li>);
  var nbProgessing = 0;
  data["taches"].forEach(function(tache){
    if (!tache["done"]){
      ++nbProgessing;
    }
  })
  
  return (
    <div className="App">
      <header>
        <h1> To Do amU </h1>
        <h2> {data["taches"].length} tâches, dont {nbProgessing} en cours </h2>
        <ul>
          {listTaches}
        </ul>
      </header>

      <footer>
        <a>Tâche </a>
        <a>Catégorie</a>
      </footer>
    </div>
  );
}

export default App;
