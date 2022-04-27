import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GreenButton.styles.js';


const GreenButton = ({text, propStyles, onPress, small}) => {
  return (
    <TouchableOpacity style={[styles.btn, propStyles]} onPress={onPress}>
          <Text style={[styles.btnText, small && styles.smallBtn]}>          
            {text}
          </Text>
    </TouchableOpacity>
  );
};

GreenButton.defaultProps = {
  small: false,
}

export default GreenButton;
