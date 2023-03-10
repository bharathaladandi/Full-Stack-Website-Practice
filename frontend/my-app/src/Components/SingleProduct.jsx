import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const getData = (url) => {

    return fetch(url).then((res) => res.json());
}

export const SingleProduct = () => {

    // const params = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const { product_id } = useParams();

    // https://blossombackend.onrender.com/products/Sale/${id}/spec

    // Sale

    // let id = params.id;
    useEffect(() => {

        getData(`https://blossombackend.onrender.com/products/Sale/${product_id}/spec`).then((res) =>{

        console.log(res[0])
        setProductDetails(res[0])
        })
    }, [product_id]);

    return (
        <div
        style={{
            
            width: "80%",
            margin: "auto",
            gap: "20px"
          }}>
            <img style={{ alignItems: 'center', height: '100px', width: '130px' }} src={productDetails.image} alt="alt-prof" />
            <h5>
                Name: {productDetails.title}
            </h5>
            <h4>
                Price: {productDetails.price}
            </h4>

            <Link to='/products'><h3>GO BACK </h3></Link>
        </div>
    )
}
