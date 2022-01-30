
import './App.css';
import React, { useState } from "react";
import { Input, Button, HStack, Heading, Container, Center, Box } from '@chakra-ui/react'
import CurrentWeatherCard from './components/weather-card/weather-card'
import ErrorMessage from './components/error/error';
import CityInput from './components/input/city-input';

function App() {

  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState('')


  function callApi(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6609dcee5071d6ce0054da54da985d9e&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result)
      });
  }

  const error = weatherData && weatherData.cod !== 200

  return (
    <div>
    <Container>
      <Center>
      <Heading marginTop="1em" size="2xl">
        Whatever the Weather
      </Heading>
      </Center>
      <HStack>
        <CityInput callback={setLocation}/>
      <Button 
        size="lg"
        onClick={() => {
        callApi(location)}}>
          Get Forecast
      </Button>
      </HStack>

    {weatherData && !error ? 
    <CurrentWeatherCard weatherData={weatherData} /> 
    : ""}

    {error? <ErrorMessage weatherData={weatherData}/>: ""}
    </Container>
    </div>
  );
}

export default App;
