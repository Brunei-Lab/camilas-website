import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/TextBox.module.scss';

const TextBox = ({ text, button }) => (
  <Jumbotron className={`${styles.TextBox} mb-0`}>
    <h1 className="mb-3">{text.title}</h1>
    <p>
      {text.paragraph}
    </p>
    { button && <p><Button className="mt-4" variant="light">Entre em contato</Button></p> }
  </Jumbotron>
)

export default TextBox;