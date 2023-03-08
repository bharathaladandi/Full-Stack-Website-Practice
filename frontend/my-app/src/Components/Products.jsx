import React, { useEffect, useState } from 'react'


const getData = (url) => {

return fetch(url).then((res) => res.json())
}
export const Products = () => {

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  
  const limit = 5;
  
  useEffect(() => {

    getData(`https://blossombackend.onrender.com/products/Sale/asc?page=2&limit=${limit}`).then((res) => {

    console.log(res);
      setData(res);
    })
  }, [])
  return (
    <div
     style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      width: "80%",
      margin: "auto",
      gap: "20px"
    }} >
      {data?.map((item) => (
        
        <div key={item._id}>
          <img style={{alignItems:'center' ,height:'100px', width:'130px'}} src={item.image} alt="prof.img" />
          <h6>{item.title}</h6>
          <h5> Price: {item.price}</h5>
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page -1)}>PREV</button>
      <button>{page}</button>
      <button onClick={() => setPage(page +1)}>NEXT</button>
    </div>

  )
}
