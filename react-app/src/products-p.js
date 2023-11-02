import React from "react";

const Products = () => {
    const [productName, setProductName] = React.useState('MacBook');
    // const [products, setProducts] = React.useState(['Dell Laptop', 'HP Charger'])
    const [products, setProducts] = React.useState([
        { name: 'Dell Laptop', price: 340000 },
        { name: 'HP Charger', price: 2500 }
    ])

    const addProduct = () => {
        // setProducts([...products, productName])
        setProducts([...products, { name: productName, price: 2000 }])
        setProductName('')
    }

    const productInputHandler = (e) => {
        setProductName(e.target.value)
    }

    return (
        <div className="container" style={{ padding: 150 }}>
            <input type="text" value={productName}  onChange={productInputHandler} />
            <button
                className="btn btn-success"
                onClick={addProduct}
            >+</button>
            {products.map((prod) => <p>Product: {prod.name}, Price: {prod.price}</p>)}
        </div>
    )
}

export default Products;