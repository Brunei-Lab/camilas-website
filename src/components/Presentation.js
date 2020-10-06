import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/Presentation.module.scss';
import HappyImage from '../assets/happy.png';
import TextBox from './TextBox';

const Presentation = () => {
  const text = {
    title: "Dra. Camila Genz",
    paragraph: `Cat ipsum dolor sit amet, get scared by doggo also cucumerro. 
                Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows 
                in litter box all day swipe at owner's legs.`
  }

  return (
    <div className={styles.Presentation}>
      <Container fluid className={styles.fullHeight}>
        <Row className={styles.fullScreen}>
          <Col className={styles.textContainer} sm={12} lg={6}>
            < TextBox text={text} button={true} />
          </Col>
          <Col className={`d-none d-lg-block ${styles["image-container"]}`} lg={6} >
            <img src={HappyImage} alt="Woman looking happy and relaxed with arms over head" />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Presentation;