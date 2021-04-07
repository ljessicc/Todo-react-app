import React, { useState } from "react";


function Form(props) {
    const [name, setName] = useState(''); //sets the initial name value as "Use hooks!",defining a function whose job is to modify name, called setName(), unstate to return the two 

    function handleChange(e) {
        setName(e.target.value);
    }
      function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What do I have to do?
      </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" >
                Add
    </button>
        </form >
    );
}

export default Form;