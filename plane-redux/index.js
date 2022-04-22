import { store } from "./redux/store.js"

import { addTodo, removeTodo } from "./redux/action.js"



store.dispatch(addTodo("Hello"))

store.dispatch(addTodo("World"))

console.log(store.getState())

store.dispatch(removeTodo("World"))

console.log(store.getState())