import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';


const ErrorMessage = ({weatherData}) => ( 
<Box bg={"red.100"} padding="1em" borderRadius="lg">
<Center>
    <Heading>oops! {weatherData.message}</Heading>
</Center> 
</Box>)

export default ErrorMessage;