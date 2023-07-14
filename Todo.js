import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);

    function handleChange(e) {
        e.preventDefault()
        setTask([...task, input]);
        setInput("")


    }

    function handleDelete(e, toDelete) {
        e.preventDefault()
        setTask(task.filter((tasks, index) => { return index !== toDelete }))
    }


    return (
        <div>
            <form onSubmit={handleChange}>
                <input type="text" placeholder='Enter Your Name ' value={input} onChange={(e => setInput(e.target.value))}></input>
                <button type='add'>submit</button>
            </form>
            <ul>
                {task.map((task, index) => {
                    return <li key={index}>{task}
                        <a herf='' onClick={(e) => handleDelete(e, index)}>
                            <DeleteIcon />
                        </a>
                    </li>

                })}

            </ul>

        </div>
    )


}


export default Todo;