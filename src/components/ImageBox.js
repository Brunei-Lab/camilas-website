import React from 'react';
import Image from 'react-bootstrap/Image'
import Therapy from '../assets/images/therapy.png';
import styles from '../assets/styles/ImageBox.module.scss';

const ImageBox = () => {
  return (
    <div className={styles.ImageBox}>
      <Image className="shadow" src={Therapy} fluid />
    </div>
  )
}

export default ImageBox;