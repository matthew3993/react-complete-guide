import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        setShowExpenseForm(false);

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpenseData(expenseData);
    };

    const cancelBntClickedHandler = () => {
        setShowExpenseForm(false);
    };

    const addNewExpenseBtnClickHandler = () => {
        setShowExpenseForm(true);
    };

    return (
        <div className='new-expense'>
            {showExpenseForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelBntClicked={cancelBntClickedHandler}
                />
            ) : (
                <button onClick={addNewExpenseBtnClickHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
