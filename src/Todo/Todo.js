import { Liste } from '../Liste/Liste';
import { Filtre } from '../Filtre/Filtre'

function Todo(){
    return(
        <div>
            <Filtre/>
            <Liste/>
        </div>
    )
}

export {Todo};