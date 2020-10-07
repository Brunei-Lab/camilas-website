import React from 'react';
import Image from 'react-bootstrap/Image'
import styles from '../assets/styles/ImageBox.module.scss';

const ImageBox = ({ image, type }) => {
  return (
    <div className={`${styles.ImageBox} ${styles[type]} mb-4`}>
      <Image className="shadow" src={ image } fluid />
    </div>
  )
}

export default ImageBox;