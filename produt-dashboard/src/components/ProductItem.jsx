import React from 'react';

function ProductItem({product}) {
    return (
        <li>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </li>
    );
}

export default ProductItem;