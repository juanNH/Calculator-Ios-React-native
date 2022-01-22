import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color: string;
  stretch?: boolean;
  action: (value: string) => void;
}

const Button = ({text, color, stretch = false, action}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(text)}
      style={{
        ...styles.boton,
        backgroundColor: color,
        flex: stretch ? 180 : 80,
      }}>
      <Text style={styles.botonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  boton: {
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    flex: 1,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});

export default Button;
