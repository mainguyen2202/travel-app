import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const center = { lat:10.745264322662383, lng:  106.72938947534102 }
const MyMapComponent = (props) => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBteHKcrWBm8HhuQwy0wxYmFbKDJNcAYU8-mai',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  // const variable array to save the users location
  const [userLocation, setUserLocation] = useState(null);

  // define the function that finds the users geolocation
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    // tìm kiếm vị trí của tôi
    getUserLocation();
    return
  }

  async function calculateRoute() {
    if (originRef.current.value == '' || destiantionRef.current.value == '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <div>
        <div className="hero-wrap js-fullheight" style={{ height: '300px', backgroundImage: `url('./images/bg_1.jpg')` }}>
          <div className="overlay"></div>
          <div className="container">
              <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true"
                  style={{ height: '465px' }}
              >
                  <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Places</span></p>
                      <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Destinations</h1>
                  </div>
              </div>
          </div>
      </div>

      <div className="container">
        <div style={{ height: "100vh", width: "100%" , marginBottom:"300px"}}>
            <div>
              <h1>Geolocation App</h1>
              {/* create a button that is mapped to the function which retrieves the users location */}
              <button onClick={getUserLocation}>Get User Location</button>
              {/* if the user location variable has a value, print the users location */}
              {userLocation && (
                <div>
                  <h2>User Location</h2>
                  <p>Latitude: {userLocation.latitude}</p>
                  <p>Longitude: {userLocation.longitude}</p>
                </div>
              )}
            </div>
            <Flex
                position='relative'
                flexDirection='column'
                alignItems='center'
                h='100%'
                w='100%'
              >
              <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                  {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                      zoomControl: false,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                  >
                    <Marker position={center} />
                    {directionsResponse && (
                      <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
              </Box>

              <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
              >
                <HStack spacing={2} justifyContent='space-between'>
                  <Box flexGrow={1}>
                    <Autocomplete>
                      <Input type='text' placeholder='Origin' ref={originRef} />
                    </Autocomplete>
                  </Box>
                  <Box flexGrow={1}>
                    <Autocomplete>
                      <Input
                        type='text'
                        placeholder='Destination'
                        ref={destiantionRef}
                      />
                    </Autocomplete>
                  </Box>

                  <ButtonGroup>
                    <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                      Calculate Route
                    </Button>
                    <IconButton
                      aria-label='center back'
                      icon={<FaTimes />}
                      onClick={clearRoute}
                    />
                  </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                  <Text>Distance: {distance} </Text>
                  <Text>Duration: {duration} </Text>
                  <IconButton
                    aria-label='center back'
                    icon={<FaLocationArrow />}
                    isRound
                    onClick={() => {
                      map.panTo(center)
                      map.setZoom(15)
                    }}
                  />
                </HStack>
              </Box>
            </Flex>
        </div>
      </div>
    </div>
  )
}

export default MyMapComponent;
