import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { locationsInfo } from '../assets/lib/content';
import MapContainer from './MapContainer';
import styles from '../assets/styles/LocationsContainer.module.scss';

const LocationsContainer = () => {
  const columnNum = 12/locationsInfo.length

  return (
    <Container fluid className={`${styles.LocationsContainer} py-lg-5`} >
      <Row>
        { locationsInfo.map(location => (
          <Col sm={12} lg={{columnNum}}>
            <MapContainer position={location.coord} />
            <div>
              <h3>{location.title}</h3>
              <p>{location.paragraph}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default LocationsContainer;