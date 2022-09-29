import React, { useState } from 'react'
import { Box, Input, FormLabel } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
export const AddPatient = () => {




    const [data, setData] = useState({
        name: "",
        category: "",
        age: "",
        medicine: "",
        image: "",
        quantity: "",


    })


    const handleChange = (e) => {

        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        })



    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://health-care-medical.herokuapp.com/patient", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        navigate("/")
    }




    return (
        <>
            <Box borderRadius={'10px'} padding={'10px'} margin={'auto'} width={"50%"} height="550px" border={'1px solid teal'}>

                <form
                    onSubmit={handleSubmit}
                >
                    <Box>
                        <FormLabel>Name</FormLabel>{" "}
                        <Input
                            type="text"
                            name="name"
                            className="name"
                            placeholder="enter name"
                            onChange={handleChange}
                        />
                    </Box>



                    <Box>
                        <FormLabel>Gender</FormLabel>
                        <Box>
                            Male
                            <input
                                onChange={handleChange}
                                name="category"
                                className="male"
                                type="radio"
                                value={"male"}
                            />{" "}
                            Female{" "}

                            <input
                                onChange={handleChange}
                                name="category"
                                className="female"
                                type="radio"
                                value={"female"}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <FormLabel>Age</FormLabel>  {" "}
                        <Input
                            onChange={handleChange}
                            id="age"
                            type="number"
                            name="age"
                            className="age"
                            placeholder="enter age"
                        />
                    </Box>

                    <Box>
                        <FormLabel>Medicine</FormLabel>  {" "}
                        <Input
                            onChange={handleChange}
                            id="medicine"
                            type="text"
                            name="medicine"
                            className="medicine"
                            placeholder="enter medicine"
                        />
                    </Box>

                    <Box>
                        <FormLabel>Image Url</FormLabel>  {" "}
                        <Input
                            onChange={handleChange}
                            id="image"
                            type="text"
                            name="image"
                            className="image"
                            placeholder="enter image url"
                        />
                    </Box>



                    <Box>
                        <FormLabel>Quantity</FormLabel>  {" "}
                        <Input
                            onChange={handleChange}
                            id="quantity"
                            type="number"
                            name="quantity"
                            className="quantity"
                            placeholder="enter Medicine quantity"
                        />
                    </Box>



                    <input className="submit" type="submit" value="Submit" />

                </form>
            </Box>
        </>
    )
}
