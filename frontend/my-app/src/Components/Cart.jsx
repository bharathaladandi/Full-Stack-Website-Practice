import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { FavouriteButton } from '../Pages/Products/FavouriteButton';

import { PriceTag } from '../Pages/Products/PriceTag';

import { Rating } from '../Pages/Products/Rating';
import { ProductGrid } from '../Pages/Products/ProductGrid';

import { remove } from '../Redux/cartSlice';

export const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);


  const handleRemove = (productId) => {

    dispatch(remove(productId))
  }
  return (
    <div style={{margin:'auto', width:'80%'}}>

      <h3>Cart</h3>

      <div style={{marginTop:'80px'}}>
      <ProductGrid>
        {
          products && products.map((product) => (

            // <div>
            //     <img src={product.image} alt="alt" />

            //     <h5>{product.title}</h5>

            //     <h5>{product.price}</h5>

            //     <button>Remove</button>
            // </div>

            <Stack
              spacing={{
                base: '4',
                md: '5',
              }}
            >
              <Box position="relative">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={product.image}
                    alt={product.category}
                    draggable="false"
                    fallback={<Skeleton />}
                    borderRadius={{
                      base: 'md',
                      md: 'xl',
                    }}
                  />
                </AspectRatio>
                <FavouriteButton
                  position="absolute"
                  top="4"
                  right="4"
                  aria-label={`Add ${product.title} to your favourites`}
                />
              </Box>
              <Stack>
                <Stack spacing="1">
                  <Text fontWeight="medium" color={('gray.700', 'gray.400')}>
                    {product.title}
                  </Text>
                  <PriceTag price={product.price} salePrice={product.price} currency="USD" />
                </Stack>
                <HStack>
                  <Rating defaultValue={product.rating} size="sm" />
                  <Text fontSize="sm" color={('gray.600', 'gray.400')}>
                    12 Reviews
                  </Text>
                </HStack>
              </Stack>
              <Stack align="center">
                <Button onClick={() => handleRemove(product._id)} colorScheme="blue" width="full">
                  {/* Quick shop */}  Remove
                </Button>
                <Link
                  textDecoration="underline"
                  fontWeight="medium"
                  color={('gray.600', 'gray.400')}
                >
                  {/* Quick shop */}
                </Link>
              </Stack>
            </Stack>
          ))
        }
        </ProductGrid>
      </div>


    </div>
  )
}
