import { SET_TODO } from "./actionType";

export const setTodo = (data) => ({
    type: SET_TODO,
    payload: data
})

export const fetchTodo = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/todos')
        .then(res => res.json())
        .then(data => dispatch(setTodo(data)))
    }
}