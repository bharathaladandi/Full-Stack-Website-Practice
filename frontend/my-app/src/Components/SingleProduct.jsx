import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Image, Spinner } from '@chakra-ui/react';
import { PriceTag } from '../Pages/Products/PriceTag';

const getData = (url) => {

    return fetch(url).then((res) => res.json());
}

export const SingleProduct = () => {

    // const params = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const { product_id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);

    // This is another api (Beauti Products API)
    // https://blossombackend.onrender.com/products/Sale/${id}/spec

    // Sale

    // let id = params.id;


    // GET all DATA from here
    useEffect(() => {

        setIsLoaded(true)
        // loading is start 
        getData(`https://blossombackend.onrender.com/products/Sale/${product_id}/spec`).then((res) => {

            console.log(res[0])
            setProductDetails(res[0])
            setIsLoaded(false)

            // loading is end
        })
    }, [product_id]);

    return (

        // This is basic UI

        // <div
        // style={{

        //     width: "80%",
        //     margin: "auto",
        //     gap: "20px",
        //     boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        //   }}>
        //     <img style={{ alignItems: 'center', height: '100px', width: '130px' }} src={productDetails.image} alt="alt-prof" />
        //     <h5>
        //         Name: {productDetails.title}
        //     </h5>
        //     <h4>
        //         Price: {productDetails.price}
        //     </h4>

        //     <Link to='/products'><h3>GO BACK </h3></Link>
        // </div>

        <div style={{ marginTop: '100px', marginBottom: '80px' }}>

{/* This is first UI (vartical) */}

            {/* <Card maxW='lg' alignItems={'center'} m={'auto'}>
                <CardBody>
                    <Image
                        src={productDetails.image}
                        alt={productDetails.category}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{productDetails.title}</Heading>
                        <Text>
                        {productDetails.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${productDetails.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card> */}


{/* This is Secound UI (horizental) */}
            {isLoaded ? (

                // If loading is true show this UI.
                <Stack padding={4} spacing={1} 
                 alignItems={'center'}
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

                // Else If loading is false or data is fetched then show this UI.
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width='80%'
                    margin='auto'
                    textAlign={'center'}
                    marginTop={50}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '350px' }}
                        src={productDetails.image}
                        alt={productDetails.category}
                        style={{ margin: 'auto' }}
                    />

                    <Stack style={{ width: '50%', margin: 'auto' }}>
                        <CardBody>
                            <Heading color='#ff0066' size='lg'>{productDetails.title}</Heading>

                            <Text py='4'>
                                {productDetails.description}
                            </Text>
                            <Text color='teal.600' fontSize='2xl' marginTop={10}>
                                <PriceTag price={productDetails.price} salePrice={productDetails.price} currency="USD" />
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue' >
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>

                        </CardFooter>
                    </Stack>
                </Card>
            )}
        </div>




    )
}
