import React from 'react'
import { Box, Flex, Text, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {







    return (
        <>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>

                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Link to="/">
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontFamily={'heading'}
                                color={useColorModeValue('gray.800', 'white')}>
                                Home
                            </Text></Link>





                    </Flex>








                </Flex>


            </Box>
        </>
    )
}
