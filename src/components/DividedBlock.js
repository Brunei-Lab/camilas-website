import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import styles from '../assets/styles/DividedBlock.module.scss';

const DividedBlock = ({ position, content }) => {
  return (
    <Container fluid className={styles.DividedBlock} >
      <Row>
        <Col className={styles.column} sm={12} lg={6}>
          { position === "left" ? <ImageBox image={content.image} position={position} /> : <TextBox type="secondary" text={content} /> }
        </Col>
        <Col className={styles.column} sm={12} lg={6} >
        { position === "left" ? <TextBox type="secondary" text={content} /> : <ImageBox image={content.image} position={position} /> }
        </Col>
      </Row>
    </Container>
  )
}

export default DividedBlock;