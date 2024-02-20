import { useState, useReducer } from "react";

function BookList(props) {
    const books = ["Les strates", "Annette", "Big bisous baveux", "N'avoue jamais : roman",];
    const initialState = {
        cpt: 0,
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'decr':
                return { ...state, cpt: state.cpt - 1 }
            case 'incr':
                return { ...state, cpt: state.cpt + 1 }
            case 'setNumber':
                return { ...state, cpt: state.value }
            case 'add':
                return { ...state, cpt: state.cpt + parseInt(state.number), number: "" }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const listItems = books.map((book) => <li>{book}
        <p>Stock disponible: {state.cpt}</p>
        <button onClick={() => dispatch({ type: 'decr' })}>-</button>
        <button onClick={() => dispatch({ type: 'incr' })}>+</button>
    </li>);


    return (
        <>
            <ul>{listItems} </ul>;
        </>
    )
}
export default BookList;
