import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name : 'todos',
    initialState : {
        items : [
            {
                id: '1',
                title: 'Learn React',
                completed: true,
            },
            {
                id: '2',
                title: 'Read a book',
                completed: false,
            },
        ],
        activeFilter: 'all',
    },
    reducers: {
        addToDo: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state, action) => {
            const {id} = action.payload;

            const item = state.items.find(item => item.id === id)

            item.completed = !item.completed;
        },

        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },

        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

export const {addToDo, toggle, destroy, changeActiveFilter} = todosSlice.actions
export default todosSlice.reducer;