import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './ContactForm';
import styles from '../assets/styles/Contact.module.scss';
import { locationsInfo } from '../assets/lib/content';

const ContactContainer = () => (
  <Container fluid className={`${styles.ContactContainer} py-lg-5`} >
    <Row>
      <Col className="my-5 pr-4 pr-lg-5" sm={12} lg={7} >
        < ContactForm />
      </Col>
      <Col className="my-lg-3" sm={12} lg={5}>
        <div className={styles.textContainer}>
          <h2>Entre em contato</h2>
          { locationsInfo.map(info => (
            <p>{info.paragraph[info.paragraph.length -1]}</p>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
)

export default ContactContainer;