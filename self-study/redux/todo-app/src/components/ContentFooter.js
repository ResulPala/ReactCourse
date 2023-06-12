import React from 'react'

// import {useSelector, useDispatch} from 'react-redux'
import {activeFilter} from '../redux/todos/todosSlice'

function ContentFooter() {
    // const items = useSelector(state => state.todos.items);
    // const dispatch = useDispatch();
    // const itemsLeft = items.filter(item => !item.completed).length;
    return (
        <footer className="footer">
            <span className='todo-count'>
                <strong>2</strong>
                items left
            </span>

            <ul className='filters'>
                <li>
                    <a className='selected'>All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a>Completed</a>
                </li>

            </ul>
            
        </footer>
    )
}

export default ContentFooter