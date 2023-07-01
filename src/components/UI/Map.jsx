import React, { useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const Map = () => {
  const YOUR_API_KEY = process.env.REACT_APP_GOECODE_API;
  const mapLocation = "1+Market+St+Sydney+NSW+Australia"
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (mapLocation) {
      let geoCoding = `https://maps.googleapis.com/maps/api/geocode/json?address=${mapLocation}&key=${YOUR_API_KEY}`;
      fetch(geoCoding)
        .then((response) => response.json())
        .then((data) => setLocation(data.results[0].geometry.location))
        .catch((error) => console.log(error));
    }
  }, [mapLocation]);

  const containerStyle = {
    width: '350px',
    height: '350px',
    marginTop: '10px',
    marginBottom: '10px'
  };

  const center = {
    lat: location.lat,
    lng: location.lng
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: YOUR_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(center.lat + 0.1, center.lng + 0.1));
    bounds.extend(new window.google.maps.LatLng(center.lat - 0.1, center.lng - 0.1));
    map.fitBounds(bounds);
    const initialZoom = 2;
    setTimeout(() => {
      map.setZoom(initialZoom);
      map.setOptions({
        draggable: false,
        scrollwheel: false,
        clickableIcons: false
      });
    }, 30);
  const targetZoom = 16;
  const increment = (targetZoom - initialZoom) / 10;
  let currentIncrement = 0;
  let currentZoom = initialZoom
  setTimeout(() => {
  const interval = setInterval(() => {
    currentIncrement = currentIncrement + 0.25
    currentZoom = initialZoom + currentIncrement * increment
    map.setZoom(currentZoom);
    
    if (parseInt(currentZoom) == targetZoom) {
      clearInterval(interval);
      map.setOptions({
        draggable: true,
        scrollwheel: true,
        clickableIcons: true
      });
    }
  }, 100);
  }, 1000);
  
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>There was an error loading the Google Maps API</div>;
  }

  return isLoaded && location.lat !== 0 && location.lng !== 0 ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true }}
    >
      <MarkerF position={center} />
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : (
    <></>
    // <div><br/>Oops! It seems the location provided by the Requester is not found on Google Maps<br/><br/></div>
  );
};

export default React.memo(Map);
