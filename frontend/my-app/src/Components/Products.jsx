import React, { useEffect, useState } from 'react';

import { Link, useSearchParams } from "react-router-dom";


const getCurrentPage = (val) => {

  val = Number(val);

  if (typeof val === "number" && val <= 0) {
    val = 1;
  }

  if (!val) {
    val = 1
  }

  return val
}
const getData = (url) => {

  return fetch(url).then((res) => res.json())
}
export const Products = () => {

  const [data, setData] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    getCurrentPage(searchParams.get("page")) || 1
  );

  const limit = 5;

  useEffect(() => {

    getData(`https://blossombackend.onrender.com/products/Sale/asc?page=${page}&limit=${limit}`).then((res) => {

      // console.log(res);
      setData(res);
    })
  }, [page])


  useEffect(() => {

    let paramObj = { page };

    setSearchParams(paramObj)
  }, [page])
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "80%",
        margin: "auto",
        gap: "20px",
        // border: '1px solid red'
      }} >
      {data?.map((item) => (
//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} key={item._id}>
          <img style={{marginTop:'20px',  alignItems: 'center', height: '100px', width: '130px' }} src={item.image} alt="prof.img" />
          <h6>{item.title}</h6>
          <h5> Price: {item.price}</h5>
          <Link to={`/products/${item._id}`}>More Details</Link>
        </div>
      ))}



      <div>

        <button disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</button>
        <button>{page}</button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </div>

  )
}
