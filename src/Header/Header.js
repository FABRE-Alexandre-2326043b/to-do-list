import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Header(){
  const data = useContext(TodoContext);
    return (
        <header>
        <h1> To Do amU </h1>
        <h2> {data["taches"].length} tâches, dont {data["taches"].filter(t => !t.done).length} en cours </h2>
      </header>
    )
}

export {Header};