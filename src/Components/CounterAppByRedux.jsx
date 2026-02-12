import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../reduxFeatures/counterSlice";

const CounterAppByRedux = () => {
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) => state.CounterStore.value);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleReset = () => {
        dispatch(reset());
    }

    const handleAmount = (e) => {
        console.log('handleAmount =', e.target.value);
        const value = e.target.value;
        setAmount(value);
    }

    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(amount));
    }

    return (
        <div id="counter-app-by-redux" className="lightBlue p-2">
            <h5>Counter App By Redux</h5>
            <h6>Current Counter: {count}</h6>

            <button className="btn btn-success btn-sm" onClick={handleIncrement}>Increment By 1</button>
            &nbsp;&nbsp;
            <button className="btn btn-primary btn-sm" onClick={handleDecrement}>Decrement By 1</button>

            &nbsp;&nbsp;
            <button className="btn btn-danger btn-sm" onClick={handleReset}>Reset</button>

            <br/><br/>
            <div>   
                <input type='number' placeholder='Enter amount' value={amount} onChange={handleAmount} />
                &nbsp;
                <button className='btn btn-info btn-sm' onClick={handleIncrementAmount}>Increment By Amount</button>
            </div>
        </div>
    )
}

export default CounterAppByRedux;