import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';
import styles from '../assets/styles/MapContainer.module.scss';

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
    <div className={styles.MapContainer} ref={ref} />
  )
}

export default MapContainer;