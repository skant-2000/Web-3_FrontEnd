const initialState = {
    todo: []
}

export const reducer = (store = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...store,
                todo: [...store.todo, action.payload]
            }
        case "REMOVE_TODO":
            return {
                ...store,
                todo: store.todo.filter((item) => item !== action.payload)
            }
    }
}