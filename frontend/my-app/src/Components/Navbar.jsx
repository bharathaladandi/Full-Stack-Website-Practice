import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

import { BsToggle2On, BsToggle2Off } from "react-icons/bs";


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const items = useSelector((state) => state.cart);

  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Box  >
      <Flex position="fixed" top={0} zIndex={5}
        bg={useColorModeValue('gray.600', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        w="100%"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('white', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction={'row'} spacing={4}>
              <Link to="/"><h3>Home</h3></Link>
              <Link to="/products"><h3>Product</h3></Link>
              <Link to="/cart"><h3>Cart: {items.length} </h3></Link>
              <Link to="/products"><h3>Best Sellar</h3></Link>
              <Link to="/products"><h3>Offers</h3></Link>
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

<IconButton
            bg={"transparent"}
            fontSize={"25px"}
            onClick={toggleColorMode}
            icon={
              colorMode === "light" ? (
                <BsToggle2Off />
              ) : (
                <BsToggle2On color={"blue"} />
              )
            }
          />
          <Link to='/login'>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              color={'white'}>
              Sign In
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'teal.400'}
              _hover={{
                bg: 'teal.300',
              }}>
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>

      </Collapse>
    </Box>
  );
}




// export default function Navbar() {
//   return (
//     <div>
//         <Link to="/"><h3>Home</h3></Link>
//         <Link to="/products"><h3>Product</h3></Link>
//         <Link to="/cart"><h3>Cart</h3></Link>
//         <Link to="/signup"><h3>Signup</h3></Link>
//         <Link to="/login"><h3>Login</h3></Link>
//     </div>

//   )
// }



