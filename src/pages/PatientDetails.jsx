import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Image, } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import { type } from '@testing-library/user-event/dist/type'
import { useDispatch, useSelector } from 'react-redux';
import { getMedicineData } from '../redux/AppReducer/action'



export const PatientDetails = () => {
    const { id } = useParams()
    const [users, setUsers] = useState({})



    useEffect(() => {
        axios.get(`https://health-care-medical.herokuapp.com/patient/${id}`).then((data) => {
            setUsers(data.data)

        })
    }, [])



    return (
        <>



            <Box margin={"auto"} width="60%" height="600px">
                <Box margin={"auto"} width="80px" height="80px" boxSize='sm'>
                    <Image borderRadius={"10px"} width="100%" height="100%" src={users.image} alt='Dan Abramov' />
                </Box>
                <Box >
                    <Flex padding-left={"30px"} justifyContent={"space-between"}>
                        <Box width={"50%"} height="200px" >
                            <Text fontSize="3xl" >Name:-{users.Name}</Text>


                        </Box>
                        <Box>
                            <Text fontSize="4xl">Email:-{users.Email}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="4xl" >State:-{users.State}</Text>
                        </Box>
                    </Flex>

                    <Box>
                        <Text fontSize="4xl" >Mobile:-{users.Mobile}</Text>
                    </Box>


                </Box>

            </Box>




        </>
    )
}
