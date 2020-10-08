import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { curriculumArray } from '../assets/lib/content';
import styles from '../assets/styles/Curriculum.module.scss';
import CamilaPicture from '../assets/images/camila.png';

const Curriculum = () => (
  <Container fluid className={`${styles.Curriculum} my-5`} >
    <Row>
      <Col className={styles.cetralized} sm={12} lg={5}>
        <Image src={CamilaPicture} roundedCircle />
      </Col>
      <Col className="mt-5 pr-4 pr-lg-5" sm={12} lg={6} >
        <h2>Currículo</h2>
        <h4>Dra. Camila Genz Kistemacher</h4>
        <ul className="mt-3">
          { curriculumArray.map(item => (
            <li>{ item }</li>
          ))}
        </ul>
      </Col>
    </Row>
  </Container>
)

export default Curriculum;