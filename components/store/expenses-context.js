import { createContext, useReducer } from 'react';

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
    date: new Date('2023-08-20'),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: ({ description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() * Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

export function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense({ expenseData }) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
