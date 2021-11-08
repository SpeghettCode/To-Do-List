import react from "react";
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Todo = ({item}) => {
    return (
        <div>
            <div>
                <h2>{item}</h2>
                <button><FontAwesomeIcon icon={faCheck} /></button>
                <button><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    );
}

export default Todo;