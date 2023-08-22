import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, mode == 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode == 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  continer: {},
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary200,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
