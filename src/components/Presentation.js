import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/Presentation.module.scss';
import HappyImage from '../assets/happy.png';
import TextBox from './TextBox';
import { PresentationText } from '../assets/lib/texts';

const Presentation = () => (
  <div className={styles.Presentation}>
    <Container fluid className={styles.fullHeight}>
      <Row className={styles.fullScreen}>
        <Col className={styles.textContainer} sm={12} lg={6}>
          <TextBox type="primary" text={PresentationText}/>
        </Col>
        <Col className={`d-none d-lg-block ${styles["image-container"]}`} lg={6} >
          <img src={HappyImage} alt="Woman looking happy and relaxed with arms over head" />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Presentation;