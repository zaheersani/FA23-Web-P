const MyComp = (prop) => {

    const myReactStyle = {
        fontSize: 45,
        color: 'red'
    }

    let myMsg = <></>;
    if (prop.msg) {
        myMsg = <h3>Message: {prop.msg}</h3>
    }

    return (
        <>
            <h1 style={myReactStyle}>My Component # {prop.count}</h1>
            {/* {prop.msg != undefined ? <h3>Message: {prop.msg}</h3> : <></>} */}
            {myMsg}
            <MyChildComp />
        </>
    )
}

const MyChildComp = () => {
    return <span className="mystyle">My Child Component</span>
}

export { MyComp, MyChildComp }