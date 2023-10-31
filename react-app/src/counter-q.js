import React from "react";

function Counter() {

    var msg  = "Initial Msg"
    const clickEvent = () => {
        // alert('You Clicked Me!')
        msg = 'You Clicked Me!'
        console.log(msg)
    }

    // var count = 0

    const [count, setCount] = React.useState(0)

    const inc = () => {
        // setCount(count)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    console.log('Im re-rendered!')

    const [start, setStart] = React.useState(true)

    if (start) {
        return (
            <div>
                <h1>Welcome to React Counter</h1>
                <button onClick={() => setStart(false)}>Start Counter</button>
            </div>
        )
    }
    
    return (
        <div className="container" style={{fontSize: 45, padding: 150}}>
            {/* <h1>Counter Component</h1>
            <button onClick={clickEvent}>Click Me</button> */}
            <span>{msg}</span>
            <button
                onClick={dec}
                className="btn btn-primary"
                disabled={count <= 0}
            >-</button>
            <span>{count}</span>
            <button onClick={inc} className="btn btn-primary">+</button>
        </div>
    )
}

export default Counter;