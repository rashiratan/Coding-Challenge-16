import { useState } from 'react'
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  {/* Initial array of products*/}
  const [products, setProducts] = useState([ 
    {id: 1, name: "Laptop", price: "$" + 900, description:"Grey colored, with 6GB RAM and i7 13th gen processor"},
    {id: 2, name: "Phone", price: "$" + 500, description:"Android 14 devide with 6 inch screen, and many other features"},
    {id: 3, name: "Tablet", price: "$" + 700, description:"Android 14 device with a 10 inch screen and a stylus"}
  ]);
{/* Add new products to old products*/}
  function addProduct(newProduct) {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }
  

  return (
    <>
      <div>
      <h1>Product List</h1>
      {/* Render ProductList and pass the placeholder list*/}
      <ProductList products={products} />
      <h2>Add a New Product</h2>
      {/* Render AddProductForm and pass setProducts*/}
      <AddProductForm addProduct={addProduct} />
      </div>
      
    </>
  )
}

export default App;
