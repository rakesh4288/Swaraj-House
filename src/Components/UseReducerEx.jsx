import { useReducer } from "react";

const UseReducerEx = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return {
                    count: state.count + 1
                }
            case 'decrement':
                return {
                    count: state.count - 1
                }
            case 'reset':
                return { count: 0 }
            default :
                return {count: 0}
        }
    }
    const [state, dispatch] = useReducer(reducer, {count : 0});
    const handleIncrement = () => {
        dispatch({type: 'increment'});
    }

    const handleDecrement = () => {
        dispatch({type: 'decrement'});
    }

    const handleReset = () =>{
        dispatch({type: 'reset'});
    }
    return (
        <div className="alert alert-info">
            <div className="text-center">
                <p>
                    <buttpn className="btn btn-success btn-sm" onClick={handleIncrement}>Increment</buttpn>
                </p>
                <p>Counter: {state.count} </p>
                <p>
                    <buttpn className="btn btn-danger btn-sm" onClick={handleDecrement}>Decrement</buttpn>
                </p>


                <p>
                    <buttpn className="btn btn-primary btn-sm" onClick={handleReset}>Reset</buttpn>
                </p>
            </div>           
        </div>
    )
}


export default  UseReducerEx;