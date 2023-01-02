import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (selectedYear) => {
        console.log('Expenses: setting selectedYear = ' + selectedYear);
        setSelectedYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selectedYear={selectedYear}
                onYearChange={yearChangeHandler}
            />

            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
