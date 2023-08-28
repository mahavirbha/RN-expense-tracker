import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { ExpenseContext } from '../components/store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Total'
      fallbackText='No registered expenses found.'
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
