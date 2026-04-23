import React from 'react';
import { Image } from 'react-native';
import Loginsytle from '../css/Logincss'; 

const Logo = () => {
  return (
    <Image
      source={require('../image/logo.png')}
      style={Loginsytle.image}
    />
  );
}

export default Logo;