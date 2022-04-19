import React, { useEffect } from 'react'
import { useState } from 'react'
import style from "./HomePage.module.css"

export default function HomePage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
      }, [])

      console.log(products)

  return (
    <div className={style.mainDiv}>
        {products.map((product) => (
            <div key={product.id} className={style.productDiv}>
                <div>
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>{`Price - $${product.price}`}</p>
                    <p>{`Rating - ${product.rating.rate}`}</p>
                    <p>{`Customer Rated - ${product.rating.count}`}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
