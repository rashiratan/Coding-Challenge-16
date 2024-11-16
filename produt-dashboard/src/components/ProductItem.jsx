import React from 'react';

function ProductItem({product}) {
    return (
        <li>
            <p>Product: {product.name}</p>
            <p>Price: ${product.price}</p>    
            <p>Product Description: {product.description}</p>
        </li>
    );
}

export default ProductItem;