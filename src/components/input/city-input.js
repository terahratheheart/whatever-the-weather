import React from 'react';
import { Input } from '@chakra-ui/react';


const CityInput = ({callback}) => ( 
    <Input 
        placeholder='Enter City' 
        maxWidth="2xl"
        margin="7"
        size="lg"
        onChange={(e) => {
        const local = e.target.value 
        callback(local)}}>
    </Input>)


export default CityInput;