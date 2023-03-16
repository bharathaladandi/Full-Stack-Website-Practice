import { Box, Button, Stack, Spinner, Tooltip } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Link, useSearchParams } from "react-router-dom";
import { ProductCard } from '../Pages/Products/ProductCard';
import { ProductGrid } from '../Pages/Products/ProductGrid';




// Page Logic
const getCurrentPage = (val) => {

  val = Number(val);

  if (typeof val === "number" && val <= 0) {
    val = 1;
  }
  if (!val) {
    val = 1
  }

  return val
};


//Fetching Data
const getData = (url) => {

  return fetch(url).then((res) => res.json())
};



export const Products = () => {

  const [data, setData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false)

  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    getCurrentPage(searchParams.get("page")) || 1
  );

  const limit = 5;

  // get data from here
  useEffect(() => {
    setIsLoaded(true);

    getData(`https://blossombackend.onrender.com/products/Sale/asc?page=${page}&limit=${limit}`).then((res) => {

      // console.log(res);
      setData(res);
      setIsLoaded(false);
    })
  }, [page])


  // pagination Logic (If pages no. changes our param also change)
  useEffect(() => {

    let paramObj = { page };

    setSearchParams(paramObj)
  }, [page, setSearchParams])



  return (
    <div key={Date.now()}>

      {/* If lodding is true then show loding indicator  */}
      {isLoaded ? (
        <Stack padding={4} spacing={1} marginTop={50}
        marginBottom={250} alignItems={'center'}
          justifyContent={'center'}
          display={'flex'} >
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
            marginTop={100}
          />
        </Stack>
      ) : (
        // else shows products or DATA
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: '4',
            md: '8',
            lg: '12',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
          marginTop='50px'
          marginBottom='50px'
        >

          <ProductGrid>
            {data?.map((item) => (
              //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              // <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={item._id}>
              //   <Link to={`/products/${item._id}`}>
              //     <img style={{ marginTop: '20px', alignItems: 'center', height: '100px', width: '130px' }} src={item.image} alt="prof.img" />
              //     <h6>{item.title}</h6>
              //     <h5> Price: {item.price}</h5>
              //   </Link>
              // </div>
              <Link key={item._id} to={`/products/${item._id}`}>
                <ProductCard key={item._id} product={item} />
              </Link>
            ))}
          </ProductGrid>


          <ProductGrid>
            <div style={{ gap: '30px', margin: 'auto', marginTop: '50px' }}>

              <Tooltip label={page === 1}>
                {/* <Button disabled>Submit</Button> */}

                <Button style={{ marginRight: '20px' }} disabled={page === 1} onClick={() => setPage(page - 1)}>PREV</Button>
              </Tooltip>
              <button style={{ margin: 'auto' }}>{page}</button>
              <Button style={{ marginLeft: '20px' }} onClick={() => setPage(page + 1)}>NEXT</Button>
            </div>
          </ProductGrid>
        </Box>
      )}
    </div>
  )
};
