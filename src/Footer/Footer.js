import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import { FormTask } from '../FormTask/FormTask';
import { CategorieForm } from '../CategorieForm/CategorieForm'



function Footer(){
    const [text2, setText2] = useState('');
    const {currentTodo, setCurrentTodo} = useContext(TodoContext);

    return(
        <footer>
            <FormTask/><br/>               
            <CategorieForm/>
        </footer>
        )
}

export {Footer};