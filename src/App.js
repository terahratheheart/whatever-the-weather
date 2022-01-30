
import './App.css';
import React, { useState } from "react";
import {HStack, Heading, Container, Center } from '@chakra-ui/react'
import CurrentWeatherCard from './components/weather-card/weather-card'
import ErrorMessage from './components/error/error';
import InputButton from './components/button/button'
import CityInput from './components/input/city-input';

function App() {

  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState('')


  function callApi(location) {
    fetch(`${process.env.REACT_APP_API_URL}weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
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
        <InputButton callback={callApi} location={location} />
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
