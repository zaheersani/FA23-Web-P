import React, {useState} from "react";

function CounterP() {

    var msg = "Welcome"

    const clickMeEvent = (alertMsg) => {
        // alert(alertMsg)
        msg = "You Clicked Me!"
        console.log(msg)
    }

    // const inputEvent = (e) => {
    //     console.log(e.target.value)
    // }

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prev => prev + 1);
        // setCount(prev2 => prev2 + 1);
        // setCount(prev3 => prev3 + 1);
        // setCount(20)
        console.log(`Count: ${count}`)
    }

    const dec = () => {
        if(count > 0)
            setCount(count - 1)
    }

    const [isStarted, setStarted] = useState(false);

    if (!isStarted) {
        return (
            <div className="container">
                <h1>Welcome to React Counter</h1>
                <button
                    className="btn btn-success"
                    onClick={() => setStarted(true)}
                >Start</button>
            </div>
        )
    }

    return (
        <div className="container" style={{padding: 150, fontSize: 40}}>
            <h1>Counter Demo</h1>
            {/* <input type="text" onChange={inputEvent} />
            <button onClick={clickMeEvent}>Click Me!</button>
            <span>{msg}</span> */}

            <button
                onClick={dec}
                className={count == 0 ? "btn btn-secondary" : "btn btn-primary"}
                // disabled={count == 0}
            >-</button>
            <span>{count}</span>
            <button onClick={inc} className="btn btn-primary">+</button>
        </div>
    )
}

export default CounterP;