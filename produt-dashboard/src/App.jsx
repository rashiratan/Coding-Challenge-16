import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {id: 1, name: "Product 1", price: 0, description:"not available"},
    {id: 2, name: "Product 2", price: 0, description:"not available"},
    {id: 3, name: "Product 3", price: 0, description:"not available"}
  ]);

  return (
    <>
      <div>
      <h1>Product List</h1>
      {/* Render ProductList and pass the placeholder list*/}
      <ProductList products={products} />
      <h2>Add a New Product</h2>
      {/* Render AddProductForm and pass setProducts*/}
      <AddProductForm setProducts={setProducts} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
