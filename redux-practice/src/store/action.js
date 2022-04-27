import { DECREMENT_BY_ONE, DECREMENT_BY_X, DIVIDE_BY_X, INCREMENT_BY_ONE, INCREMENT_BY_X, MULTIPLY_BY_X } from "./actionType";

export const incrementByOne = () => ({
    type: INCREMENT_BY_ONE,
    payload: 1
})

export const decrementByOne = () => ({
    type: DECREMENT_BY_ONE,
    payload: 1
})

export const incrementByX = (value) => ({
    type: INCREMENT_BY_X,
    payload: value
})

export const decrementByX = (value) => ({
    type: DECREMENT_BY_X,
    payload: value
})

export const multiplyByX = (value) => ({
    type: MULTIPLY_BY_X,
    payload: value
})

export const divideByX = (value) => ({
    type: DIVIDE_BY_X,
    payload: value
})