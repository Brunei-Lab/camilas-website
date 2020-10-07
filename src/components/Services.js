import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceCard from './ServiceCard';
import { servicesArray } from '../assets/lib/content';
import styles from '../assets/styles/Services.module.scss';

const Services = () => (
  <Container className={`${styles.Services} py-3 py-lg-5`} fluid>
    <h1 className="mb-3 mb-lg-5" >Principais Atendimentos</h1>
    <Row className={styles.servicesContainer}>
      { servicesArray.map(service => (
        <Col className={styles.cardContainer} sm={12} md={6}>
          < ServiceCard service={service} />
        </Col>
      ))}
    </Row>
  </Container>
)

export default Services;