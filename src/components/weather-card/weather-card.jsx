import React from 'react';
import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import { toDegrees } from '../../utils/utils.js';


const CurrentWeatherCard = ({weatherData}) => (
    <Box  maxW="2xl" borderWidth='1px' borderRadius='lg' margin="1em" bg="gray.100">

        <VStack>
        <Box width="100%" bg="blue.100" display= "flex" justifyContent="center">
        <Heading size="2xl">{weatherData.name}</Heading>
        </Box>
        <Box borderWidth='1px' borderRadius='lg' padding="1em" display="flex" justifyItems="center" bg="white">
        <VStack>
        <Heading size="xl">temperature: {toDegrees(weatherData.main.temp)}&deg;F</Heading>
        <HStack>
        <Heading size="sm">hi: {toDegrees(weatherData.main.temp_max)}&deg;F</Heading>
        <Heading size="md">|</Heading>
        {/* <Heading size="sm">lo: {Math.round(parseInt(weatherData.main.temp_min))}&deg;F</Heading> */}
        <Heading size="sm">lo: {toDegrees(weatherData.main.temp_min)}&deg;F</Heading>

        </HStack>
        </VStack>
        </Box>
        <Heading size="lg">conditions: {weatherData.weather[0].description}</Heading>
        <HStack>
        <Heading size="md">humidity: {weatherData.main.humidity}%</Heading>
        <Heading size="md">pressure: {weatherData.main.pressure}</Heading>
        </HStack>
        </VStack>
        
    </Box>
)

export default CurrentWeatherCard;