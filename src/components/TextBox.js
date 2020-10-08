import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/TextBox.module.scss';

const TextBox = ({ type, text }) => (
  <Jumbotron className={`${styles.TextBox} mb-0 ${styles[type]}`}>
    { type === "primary" ? <h1 className="mb-3">{text.title}</h1> : <h2 className="mb-3">{text.title}</h2> }
    <p className="mr-lg-5">
      {text.paragraph}
    </p>
    { type === "primary" && <p><Button className="mt-4" variant="light">Entre em contato</Button></p> }
  </Jumbotron>
)

export default TextBox;