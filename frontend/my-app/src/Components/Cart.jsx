import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// import {
//   AspectRatio,
//   Box,
//   Button,
//   HStack,
//   Image,
//   Link,
//   Skeleton,
//   Stack,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react'

import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'

import { CartItem } from '../Pages/Cart/CartItem';

import { CartOrderSummary } from '../Pages/Cart/CartOrderSummary';

// import { FavouriteButton } from '../Pages/Products/FavouriteButton';

// import { PriceTag } from '../Pages/Products/PriceTag';

// import { Rating } from '../Pages/Products/Rating';
// import { ProductGrid } from '../Pages/Products/ProductGrid';

// import { remove } from '../Redux/cartSlice';

export const Cart = () => {

  // const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);


  const itemlength = useSelector((state) => state.cart);

  // const handleRemove = (productId) => {

  //   dispatch(remove(productId))


  // }
  return (
  
    <div style={{ marginTop: '50px' }}>
      <Box
        maxW={{
          base: '3xl',
          lg: '7xl',
        }}
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
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({itemlength.length} items)
            </Heading>
            {/* {
          products && products.map((item) => ( */}
            <Stack spacing="6">
              {products && products.map((item) => (
                <CartItem key={item._id} {...item} />
              ))}
            </Stack>
            {/* ))
      } */}
          </Stack>



          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </div>
  )
}
