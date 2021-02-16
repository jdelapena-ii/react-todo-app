import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    // function that processes the changes in the input
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    // function that accepts that submission of the input
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000 ),
            text: input
        })

        setInput('');
    }

   

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? 
            (
                <>
                    <input 
                        type="text" 
                        name="text" 
                        className="todo-input edit" 
                        value={input} 
                        placeholder="Update your todo"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : 
            (
                <> 
                    <input 
                        type="text" 
                        name="text" 
                        className="todo-input" 
                        value={input} 
                        placeholder="Add a todo"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add Todo</button>
                </>
            )
            }
        </form>
    )
}

export default TodoForm
