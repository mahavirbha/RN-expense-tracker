import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { ExpenseContext } from '../components/store/expenses-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  const recenetExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recenetExpenses} expensesPeriod='Last 7 Days' />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
