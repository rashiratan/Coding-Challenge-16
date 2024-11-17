import React, { useState} from 'react';

function AddProductForm({addProduct}) {
    {/* useState to add a state to all form elements */}
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    {/* creating event for submit actiom*/}
    const actionSubmit = (event) => {
        {/* prevent automatic reload of form*/}
        event.preventDefault();
        
        {/* check for empty fields*/}
        if(!id || !name || !price || !description) {
            alert("There is an empty field.");
            return;
        }
        {/* create a new product*/}
        const newProduct = {
            id,
            name,
            price,
            description
        };
        {/* use addProduct function for new product*/}
        addProduct(newProduct);

        {/*set the values of fields per state on submit action*/}
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