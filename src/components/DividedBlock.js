import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextBox from './TextBox';
import ImageBox from './ImageBox';
import styles from '../assets/styles/DividedBlock.module.scss';

const DividedBlock = ({ type, content }) => {
  return (
    <Container fluid className={styles.DividedBlock} >
      <Row>
        <Col className={styles.column} sm={12} lg={6}>
          { type === "imageLeft" ? <ImageBox image={content.image} type={type} /> : <TextBox type="secondary" text={content} /> }
        </Col>
        <Col className={styles.column} sm={12} lg={6} >
        { type === "imageLeft" ? <TextBox type="secondary" text={content} /> : <ImageBox image={content.image} type={type}/> }
        </Col>
      </Row>
    </Container>
  )
}

export default DividedBlock;