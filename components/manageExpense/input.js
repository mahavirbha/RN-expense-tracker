import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

const Input = ({ label = '', style, textInputConfig }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig?.multiline ? styles.inputMultiline : {},
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: { fontSize: 12, color: GlobalStyles.colors.primary100 },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});