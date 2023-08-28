import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpenseContext } from '../components/store/expenses-context';

const ManageExpenses = ({ route, navigation }) => {
  const expansesCtx = useContext(ExpenseContext);
  const editExpanseId = route.params?.expenseId;
  const isEditing = !!editExpanseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpanseHandler(params) {
    expansesCtx.deleteExpense(editExpanseId);
    navigation.goBack();
  }

  function cancelHandler(params) {
    navigation.goBack();
  }

  function confirmHandler(params) {
    if (isEditing) {
      expansesCtx.updateExpense(editExpanseId, {
        description: 'Test!!!!',
        amount: 29.99,
        date: new Date('2022-05-20'),
      });
    } else {
      expansesCtx.addExpense({
        description: 'Test',
        amount: 20.0,
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpanseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { minWidth: 120, marginHorizontal: 8 },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
