import React from 'react'

function Products({image, name, price}) {
    return (
        <div className='product'>
            
            <img src={image}/>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Products
