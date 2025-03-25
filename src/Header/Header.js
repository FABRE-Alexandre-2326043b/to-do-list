import data from '../data.json';

function Header(){
    return (
        <header>
        <h1> To Do amU </h1>
        <h2> {data["taches"].length} tâches, dont {data["taches"].filter(t => !t.done).length} en cours </h2>
      </header>
    )
}

export {Header};