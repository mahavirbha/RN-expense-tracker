import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 1200,
    date: new Date('2023-05-10'),
  },
  {
    id: 'e2',
    description: 'T-shirt',
    amount: 800,
    date: new Date('2023-06-24'),
  },
  {
    id: 'e3',
    description: 'Mobile Recharge',
    amount: 500,
    date: new Date('2023-07-04'),
  },
  {
    id: 'e4',
    description: 'Movie Ticket',
    amount: 600,
    date: new Date('2023-08-02'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
