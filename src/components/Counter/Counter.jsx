import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../redux/counter/counterSlice';


export default function Counter() {
    const [value, setValue] = useState(0)
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span style={{ padding: 10 }}>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)} />
                <button
                    onClick={() => dispatch(incrementByAmount(Number(value)))}>Add</button>
            </div>
        </div>
    )
}
