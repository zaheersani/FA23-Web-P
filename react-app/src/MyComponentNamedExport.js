const MyComp = (prop) => {

    // console.log(prop)

    let msg;
    if (prop.msg)
        msg = <h3>User's Message: {prop.msg}</h3>

    return (
        <>
            <h1>My Custom Component # {prop.count}</h1>
            {/* {prop.msg && <h3>Message: {prop.msg}</h3>} */}
            {msg}
            <MyChildComp />
        </>
    )
}

const MyChildComp = () => {
    
    const mystyle = {
        fontSize: 25,
        color: 'green'
    }

    return <h3 style={mystyle}>This is my Child Component</h3>
}

export {MyComp, MyChildComp}