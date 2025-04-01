import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function Done(){
    const {showAll, currentConfig, showProgressing} = useContext(TodoContext);

    if (currentConfig["filterProgressing"]){
        return <button onClick={showAll}>Toutes</button> 
    }else{
        return <button onClick={showProgressing}>En cours</button>
    }
    
}

export {Done};