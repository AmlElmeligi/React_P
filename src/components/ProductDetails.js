import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products/" + id;

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading]);


    return (
        
        <div className='ProductDetails'>
           
           <div className='one'>
            <div className='details'>
            <h1>Details of product {id}</h1>
            <div>title : {allProducts.title}</div>
            <div>price : {allProducts.price}</div>
            <div>category : {allProducts.category}</div>
            <div>description : {allProducts.description}</div>
            </div>
            </div>
            <div className='image'>
                <img src={allProducts.image} style={{width : "100px"}} />
            </div>
            
        </div>
    )
}