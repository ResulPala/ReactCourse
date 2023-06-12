import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../redux/todos/todosSlice'

// let filtered = [];


function TodoList() {
    const dispatch = useDispatch();
    // const items = useSelector(state => state.todos.items)
    // const activeFilter = useSelector((state) => state.todos.activeFilter);

    // const handleDestroy = (id) => {
    //     if (confirm('Are you sure?')) {
    //         dispatch(destroy(id))
    //     }
    // };

    // filtered = items;
    // if (activeFilter !== 'all') {
    //     filtered = items.filter((todo) => 
    //     activeFilter === 'active' 
    //     ? todo.completed === false && todo 
    //     : todo.completed === true)
    // }

    const items = useSelector(state => state.todos.items)
    console.log(items);




    return (
        <ul className='todo-list'>
            
            
            {items.map((item) => (
                <li key={item.id} className={item.completed ? 'completed' : ''}>
                    <div className='view'>
                        <input 
                            className='toggle' 
                            type="checkbox" 
                            checked={item.completed}
                            onChange={()  => dispatch(toggle(item.id))}
                        />
                        <label>{item.title}</label>
                        <button className='destroy'></button>
                    </div>
                </li>
            ))}

        </ul>
    )
}

export default TodoList