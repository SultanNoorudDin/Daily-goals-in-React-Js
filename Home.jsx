import React, { useState } from 'react'
import Task from './Task'

function Home() {

    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // console.log(title,description)
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks], { title, description })
        console.log(tasks)
    }
    return (
        <div className='container'>
            <h1>Goals Record</h1>
            <form onSubmit={submitHandler}>

                <input type="text" placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <textarea placeholder='define your goals' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type='submit'>Add</button>
            </form>
            {tasks.map((item, index) => (
                <Task key={index} title ={item.title} description={item.description}/>
            ))}
        </div>
    )
}

export default Home