import React from 'react';
import ProductItem from './ProductItem';

function ProductList({products}) {
    {/* create a section of unordered lists for Product List*/}
    return (
        <div>
            <ul>
                {products.map(product => (
                    <ProductItem key={product.id} product = {product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

//no change for profuct keys as already included in the commit before