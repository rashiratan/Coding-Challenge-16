import React from 'react';

function ProductItem({product}) {
    {/* display product as list item*/}
    return (
        <li>
            <p>Product: {product.name}</p>
            <p>Price: ${product.price}</p>    
            <p>Product Description: {product.description}</p>
        </li>
    );
}

export default ProductItem;