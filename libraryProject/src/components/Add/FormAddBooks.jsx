import React, { useState } from 'react';

function FormAddBooks() {
    const [title, setTitle] = useState('');
    const [stock, setStock] = useState('');



    return (
        <form>
            <div >
                <label htmlFor='title'>Titre</label>
                <input
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div >
                <label htmlFor='stock'>stock</label>
                <input
                    id='stock'
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>
            <button type='submit'>Ajouter un livre</button>
        </form >
    );
}
export default FormAddBooks;