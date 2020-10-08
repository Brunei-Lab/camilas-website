import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { locationsInfo } from '../assets/lib/content';
import MapContainer from './MapContainer';
import styles from '../assets/styles/LocationsContainer.module.scss';

const LocationsContainer = () => {
  const columnNum = 8/locationsInfo.length

  return (
    <Container fluid className={`${styles.LocationsContainer} py-lg-5`} >
      <h1 className="text-center">Atendimento</h1>
      <Row className="py-5">
        <Col className="d-none d-lg-block" lg={2} />
        { locationsInfo.map(location => (
          <Col className={styles.centralized} sm={12} lg={{columnNum}}>
            <MapContainer position={location.coord} />
            <div className={styles.adress}>
              <h4>{location.title}</h4>
              { location.paragraph.map(p => (
                <p>{p}</p>
              ))}
            </div>
          </Col>
        ))}
        <Col className="d-none d-lg-block" lg={2} />
      </Row>
    </Container>
  )
}

export default LocationsContainer;