import React, { useState} from 'react';

function AddProductForm({addProduct}) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const actionSubmit = (event) => {
        event.preventDefault();
        
        if(!id || !name || !price || !description) {
            alert("There is an empty field.");
            return;
        }

        const newProduct = {
            id,
            name,
            price,
            description
        };

        addProduct(newProduct);

        setId('');
        setName('');
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={actionSubmit}>
            <label>
                Product ID:
                <br />
                <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
            </label>

            <br />
            <br />
            <label>
                Product Name:
                <br />
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </label>

            <br />
            <br />
            <label>
                Product Price:
                <br />
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}/>
            </label>

            <br />
            <br />
            <label>
                Product Description:
                <br />
                <textarea value={description} onChange={(event) => setDescription(event.target.value)}/>
            </label>

            <br />
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProductForm;