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
    // const medicine = useSelector((state) => state.AppReducer.medicine)
    // const dispatch = useDispatch()


    useEffect(() => {
        axios.get(`http://localhost:8080/patient/${id}`).then((data) => {
            setUsers(data.data)

        })
    }, [])

    // useEffect(() => {
    //     dispatch(getMedicineData())
    // }, [])

    // console.log("medicine", medicine)

    return (
        <>



            <Box margin={"auto"} width="60%" height="600px">
                <Box margin={"auto"} width="80px" height="80px" boxSize='sm'>
                    <Image borderRadius={"10px"} width="100%" height="100%" src={users.image} alt='Dan Abramov' />
                </Box>
                <Box >
                    <Flex padding-left={"30px"} justifyContent={"space-between"}>
                        <Box width={"50%"} height="200px" >
                            <Text fontSize="3xl" >Name:-{users.name}</Text>


                        </Box>
                        <Box>
                            <Text fontSize="4xl">Age:-{users.age}</Text>
                        </Box>
                        <Box>
                            <Text fontSize="4xl" >Gender:-{users.category}</Text>
                        </Box>
                    </Flex>

                    <Box>
                        <Text fontSize="4xl" >Medicine:-{users.medicine}</Text>
                    </Box>


                </Box>

            </Box>




        </>
    )
}
