import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/TextBox.module.scss';

const TextBox = ({ text, button }) => (
  <Jumbotron className={styles.TextBox}>
    <h1 className="mb-3">{text.title}</h1>
    <p className="mb-4">
      {text.paragraph}
    </p>
    { button && <p><Button variant="light">Entre em contato</Button></p> }
  </Jumbotron>
)

export default TextBox;