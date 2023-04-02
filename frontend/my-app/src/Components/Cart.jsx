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


import { remove } from '../Redux/cartSlice';

export const Cart = () => {

  // const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);


  const itemlength = useSelector((state) => state.cart);

  // const handleRemove = (productId) => {

  //   dispatch(remove(productId))


  // }
  return (
    // <div style={{margin:'auto', width:'80%'}}>

    //   <h3>Cart</h3>

    //   <div style={{marginTop:'80px'}}>
    //   <ProductGrid>
    //     {
    //       products && products.map((product) => (

    //         // <div>
    //         //     <img src={product.image} alt="alt" />

    //         //     <h5>{product.title}</h5>

    //         //     <h5>{product.price}</h5>

    //         //     <button>Remove</button>
    //         // </div>

    //         <Stack
    //           spacing={{
    //             base: '4',
    //             md: '5',
    //           }}
    //         >
    //           <Box position="relative">
    //             <AspectRatio ratio={4 / 4}>
    //               <Image
    //                 src={product.image}
    //                 alt={product.category}
    //                 draggable="false"
    //                 fallback={<Skeleton />}
    //                 borderRadius={{
    //                   base: 'md',
    //                   md: 'xl',
    //                 }}
    //               />
    //             </AspectRatio>
    //             <FavouriteButton
    //               position="absolute"
    //               top="4"
    //               right="4"
    //               aria-label={`Add ${product.title} to your favourites`}
    //             />
    //           </Box>
    //           <Stack>
    //             <Stack spacing="1">
    //               <Text fontWeight="medium" color={('gray.700', 'gray.400')}>
    //                 {product.title}
    //               </Text>
    //               <PriceTag price={product.price} salePrice={product.price} currency="USD" />
    //             </Stack>
    //             <HStack>
    //               <Rating defaultValue={product.rating} size="sm" />
    //               <Text fontSize="sm" color={('gray.600', 'gray.400')}>
    //                 12 Reviews
    //               </Text>
    //             </HStack>
    //           </Stack>
    //           <Stack align="center">
    //             <Button onClick={() => handleRemove(product._id)} colorScheme="blue" width="full">
    //               {/* Quick shop */}  Remove
    //             </Button>
    //             <Link
    //               textDecoration="underline"
    //               fontWeight="medium"
    //               color={('gray.600', 'gray.400')}
    //             >
    //               {/* Quick shop */}
    //             </Link>
    //           </Stack>
    //         </Stack>
    //       ))
    //     }
    //     </ProductGrid>
    //   </div>


    // </div>

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
