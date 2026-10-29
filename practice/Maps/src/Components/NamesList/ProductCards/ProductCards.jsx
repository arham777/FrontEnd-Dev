import React from 'react'

const ProductCards = () => {

    const products= [
      {id: 1, name: 'Product1', price: 1000, imageUrl: 'https://th.bing.com/th/id/OIP.v-q_GyWXooxjEXfiqVnusQHaHa?rs=1&pid=ImgDetMain'},
      {id: 2, name: 'Product2', price: 1000, imageUrl: 'https://cdn-images-1.medium.com/max/1600/0*PvKUArl3Rgjt1SJh.jpg'},
      {id: 3, name: 'Product3', price: 2000, imageUrl: 'https://th.bing.com/th/id/OIP.UHnL6Rj_3Q31EgJtkCYW1gHaIu?rs=1&pid=ImgDetMain'},
      {id: 4, name: 'Product4', price: 2000, imageUrl: 'https://i.pinimg.com/originals/5e/bc/f8/5ebcf80b1db6694a8c610173b371edf8.jpg'}
    ];

  return (
    <div>
      <h2>ProductCards</h2>
      <div style={
        {
          display: 'flex',
          flexWrap: 'wrap',
        }
      }>

        {products.  map(
          (product)=>(
            <div key={product.id} style={
              {
                border: '4px solid rgb(293, 321, 122)',
                padding: '10px',
                margin: '10px',
              }
            }>
              <img src={product.imageUrl} alt={product.name} style={
                {
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                }
              }/>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          )
        )}

      </div>
    </div>
  )
}

export default ProductCards