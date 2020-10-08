import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { curriculumArray } from '../assets/lib/content';
import styles from '../assets/styles/Curriculum.module.scss';
import CamilaPicture from '../assets/images/camila2.png';

const Curriculum = () => (
  <Container fluid className={`${styles.Curriculum} py-lg-5`} >
    <Row>
      <Col className="d-none d-lg-block" lg={1} />
      <Col className="my-5 pr-4 pr-lg-5" sm={12} lg={6} >
        <h2>Currículo</h2>
        <h4>Dra. Camila Genz Kistemacher</h4>
        <ul className="mt-3 mx-3 mx-md-5 mx-lg-0">
          { curriculumArray.map(item => (
            <li>{ item }</li>
          ))}
        </ul>
      </Col>
      <Col className={`${styles.cetralized} my-lg-3`} sm={12} lg={4}>
        <Image src={CamilaPicture} />
      </Col>
    </Row>
  </Container>
)

export default Curriculum;