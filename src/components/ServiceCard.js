import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from '../assets/styles/ServiceCard.module.scss';

const ServiceCard = ({ service }) => (
  <Card className={`${styles.ServiceCard} my-3`}>
    <Card.Img variant="top" src={ service.image } rounded />
    <Card.Body>
      <Card.Title className={styles.cardTitle}>{ service.title }</Card.Title>
      <Card.Text className={styles.cardText}>
        { service.paragraph }
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ServiceCard;