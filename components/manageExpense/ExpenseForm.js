import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Input from './input';

const ExpenseForm = () => {
  function AmountChangeHandler(params) {}
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: AmountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label='Description'
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: { marginTop: 40, marginBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between' },
  rowInput: {
    flex: 1,
  },
});
