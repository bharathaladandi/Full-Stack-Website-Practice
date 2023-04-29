import { Box, Button, Stack, Spinner, Tooltip, Center, Container, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { Link, useSearchParams } from "react-router-dom";
import { ProductCard } from '../Pages/Products/ProductCard';
import { ProductGrid } from '../Pages/Products/ProductGrid';
import axios from "axios";
import styles from './Product.module.css'

import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

// Page Logic
const getpage = (val) => {

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

  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(true);
  const [sort_x, setSort_x] = useState("");


  const [data, setData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false)

  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(
    getpage(searchParams.get("page")) || 1
  );

  const limit = 5;

  // get data from here
  // useEffect(() => {
  //   setIsLoaded(true);

  //   getData(`https://blossombackend.onrender.com/products/SelfCare/asc?page=${page}&limit=${limit}`).then((res) => {

  //     // console.log(res);
  //     setData(res);
  //     setIsLoaded(false);
  //   })
  // }, [page, sort_x])
  // setloading(true)

  useEffect(() => {
    setIsLoaded(true)
    getData()
      .then((res) => {
        setData(res.data)
        // setloading(false)
        setIsLoaded(false)
      }).catch((err) => console.log(err));




  }, [page, sort_x]);



  // pagination Logic (If pages no. changes our param also change)
  useEffect(() => {

    let paramObj = { page };

    setSearchParams(paramObj)
  }, [page, setSearchParams])




  const getData = () => {
    if (sort_x === "lowtohigh") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/asc?page=${page}`);
    } else if (sort_x === "hightolow") {
      return axios.get(
        `https://blossombackend.onrender.com/products/SelfCare/desc?page=${page}`
      );
    } else if (sort_x === "ot") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/ot?page=${page}`);
    } else if (sort_x === "et") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/et?page=${page}`);
    } else if (sort_x === "tt") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/tt?page=${page}`);
    } else if (sort_x === "ff") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/ff?page=${page}`);
    } else if (sort_x === "af") {
      return axios.get(`https://blossombackend.onrender.com/products/SelfCare/af?page=${page}`);
    } else if (sort_x === "three") {
      return axios.get(
        `https://blossombackend.onrender.com/products/SelfCare/three?page=${page}`
      );
    } else if (sort_x === "four") {
      return axios.get(
        `https://blossombackend.onrender.com/products/SelfCare/four?page=${page}`
      );
    } else if (sort_x === "five") {
      return axios.get(
        `https://blossombackend.onrender.com/products/SelfCare/five?page=${page}`
      );
    } else {
      return axios.get(
        `https://blossombackend.onrender.com/products/SelfCare?page=${page}`
      );
    }
  };

  const sort_func = (event) => {
    setSort_x(event.target.value);
    getData(sort_x);
  };

  return (
    <Box key={Date.now()} >

      {/* If lodding is true then show loding indicator  */}
      {/* {isLoaded ? (
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
      ) : ( */}
      <Box style={{ display: 'flex', marginTop: '50px'}}>


        <Box className={styles.main__sales}>
          <Box className={styles.main__products}>
            {/* filter section  */}
            <Box style={{ marginTop: "30px" }} className={styles.refine}>
              <p className={styles.refine_head}>Refine</p>
              <Box>
                <hr />
              </Box>
              <Box className={styles.savings}>
                <Box onClick={() => setClick(!click)}>
                  <p>Get Products By Price Range</p>
                  {click ? (
                    <MdOutlineKeyboardArrowUp className={styles.arrow} />
                  ) : (
                    <MdOutlineKeyboardArrowDown className={styles.arrow} />
                  )}
                </Box>
              </Box>
              <Box
                className={
                  click ? `${styles.refine_option1}` : `${styles.refine_option2}`
                }
              >
                <Box className={styles.sorting}>
                  <Box></Box>
                  <select name="" id="" onChange={sort_func}>
                    <option value="defalt">Price</option>
                    <option value="ot">Less than $10</option>
                    <option value="et">$10 to $20</option>
                    <option value="tt">$20 to $30</option>
                    <option value="ff">$40 to $50</option>
                    <option value="af">Above $50</option>
                  </select>
                </Box>
              </Box>

              <Box className={styles.savings}>
                <Box onClick={() => setClick1(!click1)}>
                  <p>Get Products By Rating</p>
                  {click1 ? (
                    <MdOutlineKeyboardArrowUp className={styles.arrow} />
                  ) : (
                    <MdOutlineKeyboardArrowDown className={styles.arrow} />
                  )}
                </Box>
              </Box>
              <Box
                className={
                  click1 ? `${styles.refine_option1}` : `${styles.refine_option2}`
                }
              >
                <Box className={styles.sorting}>
                  <Box>Get Products By Rating</Box>
                  <select name="" id="" onChange={sort_func}>
                    <option value="defalt">Rating</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                  </select>
                </Box>
              </Box>

              <Box className={styles.sorting}>
              <Box>Get Products By Sort :</Box>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Sort By Price</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                {/* <option value="a-z">A-Z</option> */}
              </select>
            </Box>
            </Box>
          </Box>
        </Box>

        {/* // else shows products or DATA */}
        <Box style={{margin:'auto'}}>

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
              // <Box style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} key={item._id}>
              //   <Link to={`/products/${item._id}`}>
              //     <img style={{ marginTop: '20px', alignItems: 'center', height: '100px', width: '130px' }} src={item.image} alt="prof.img" />
              //     <h6>{item.title}</h6>
              //     <h5> Price: {item.price}</h5>
              //   </Link>
              // </Box>
              <Link key={item._id} to={`/products/${item._id}`}>
                <ProductCard key={item._id} product={item} />
              </Link>
            ))}
          </ProductGrid>


          <ProductGrid>
            <Box style={{ gap: '30px', margin: 'auto', marginTop: '50px' }}>

              {/* <Tooltip label={page === 1}> */}
                {/* <Button disabled>Submit</Button> */}

                <Button style={{ marginRight: '20px' }}  disabled={page==2} onClick={() => {setPage(prev => prev- 1)}}>PREV</Button>
              {/* </Tooltip> */}
              <Button style={{ margin: 'auto' }}>{page}</Button>
              <Button style={{ marginLeft: '20px' }} onClick={() =>{setPage(prev => prev+ 1)}}>NEXT</Button>
            </Box>



{/* <Container padding="20px" minW={"100%"}>
            <Center>
           <HStack gap="20px">
           <Button disabled={page==1} onClick={()=>{setPage(prev=>prev-1)}} >Prev</Button>
            <Button>{page}</Button>
            <Button onClick={()=>{setPage(prev=>prev+1)}}>Next</Button>
           </HStack>

            </Center>
        </Container> */}
          </ProductGrid>
        </Box>

      )}
        
        </Box>
      </Box>
      {/* )} */}
    </Box>
  )
};
