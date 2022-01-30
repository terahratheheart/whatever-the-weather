import React from 'react';
import { Button } from '@chakra-ui/react';


const InputButton = ({callback, location}) => (     
    <Button 
        size="lg"
        onClick={() => {
        callback(location)}}>
        Get Forecast
    </Button>)

export default InputButton;