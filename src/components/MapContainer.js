import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

const MapContainer = ({ position }) => {
  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_MAPS_KEY,
    {
      center: position,
      zoom: 20,
    }
  )

  if (map) {
    new google.maps.Marker({position: position, map })
  }

  return (
    <div ref={ref} style={{ width: 400, height: 300 }} />
  )
}

export default MapContainer;