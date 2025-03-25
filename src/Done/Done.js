import { useContext } from 'react';
import { ConfigContext } from '../ConfigContext/ConfigContext';

function Done(){
    const config = useContext(ConfigContext);

    if (config["filterProgressing"]){
        return <button>Toutes</button> // onClick={showAll}
    }else{
        return <button>En cours</button> // onClick={showProgressing}
    }
    
}

export {Done};