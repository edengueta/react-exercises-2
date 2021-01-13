import React, { useState } from 'react';
import './Todo.scss';

function Todo() {
	const [tasks, setTasks]=useState([]);
	const [todo, setTodo]=useState('');

	function handleChange(e) {
		setTodo(e.target.value);
	}

	function submit(e) {
		e.preventDefault();
		setTasks(tasks.concat(todo));
		setTodo('');
	}

	function handleDelete(i) {
		let newTasks = tasks;
		newTasks.splice(i, 1);
		setTasks(newTasks);
		console.log(tasks)
	}

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<form onSubmit={submit}>
				<input value={todo} onChange={handleChange} placeholder="Your task..." />
				<button>Add task</button>
			</form>
			
			<ul> {tasks.map((task,i)=>{
					return(
						<li key={i}>
							<button onClick={(i)=>handleDelete(i)}>X</button>
							{task}
						</li>
					)

				})}
			</ul>
		</div>

	)
}

export default Todo;
