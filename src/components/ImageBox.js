import React from 'react';
import Image from 'react-bootstrap/Image'
import Therapy from '../assets/images/therapy.png';

const ImageBox = () => {
  return (
    <div className="ImageBox">
      <Image src={Therapy} fluid />
    </div>
  )
}

export default ImageBox;