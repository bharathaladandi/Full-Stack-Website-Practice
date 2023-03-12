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
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'
  
  
import { Rating } from './Rating'
  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const { category, image, price, rating } = product
    return (
      <Stack
        spacing={{
          base: '4',
          md: '5',
        }}
        {...rootProps}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={image}
              alt={category}
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
            aria-label={`Add ${category} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {category}
            </Text>
            <PriceTag price={price} salePrice={price} currency="USD" />
          </Stack>
          <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack>
        </Stack>
        <Stack align="center">
          <Button colorScheme="blue" width="full">
          Quick shop
          </Button>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {/* Quick shop */}
          </Link>
        </Stack>
      </Stack>
    )
  }