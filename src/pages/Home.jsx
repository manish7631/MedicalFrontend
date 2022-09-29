import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/AppReducer/action';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, Flex } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';




import { Link } from 'react-router-dom'





export const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.AppReducer.data)




    useEffect(() => {


        dispatch(getData())



    }, [])


    console.log("data", data)



    const handleChange1 = (elem) => {


        axios.delete(`http://localhost:8080/patient/${elem}`).then(({ data }) => {
            getData()
        })


    }




    return (
        <>
            <Box style={{
                width: "60%",
                height: "auto",
                border: "1px solid green"
            }}>
                <Box>

                    <Box>



                    </Box>
                    <Box>
                        <Link to="/addpatient"> <Button>Add New Patient</Button></Link>


                    </Box>

                </Box>
                <Table className="table" border="1">
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>State</Th>
                            <Th>Mobile</Th>


                        </Tr>
                    </Thead>
                    <Tbody className="tbody">
                        {data.map((data, index) => {



                            return (<Tr key={uuidv4()} className="row">
                                <Td className="first_name">{index + 1}</Td>
                                <Td className="first_name">{data.Name}</Td>
                                <Td className="email">{data.Email}</Td>
                                <Td className="state">{data.State}</Td>
                                <Td className="mobile">{data.Mobile}</Td>
                                <Td><Link to={`/${data._id}`}><button>View</button></Link></Td>
                                <Td><button onClick={() => {
                                    handleChange1(data._id)
                                }}>Delete</button></Td>
                            </Tr>
                            );
                        })}


                    </Tbody>
                </Table>


            </Box>

        </>
    )
}
