import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const filterExpenses = (selectedYear) => {
        return props.items.filter(expense => expense.date.getFullYear() === selectedYear);
    };
    
    const defaultYear = 2021;
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    
    const defaultFilteredExpenses = filterExpenses(defaultYear);
    const [filteredExpenses, setFilteredExpenses] = useState(defaultFilteredExpenses);

    const yearChangeHandler = (selectedYear) => {
        console.log('Expenses: setting selectedYear = ' + selectedYear);
        setSelectedYear(+selectedYear);
        setFilteredExpenses(filterExpenses(+selectedYear));
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selectedYear={selectedYear}
                onYearChange={yearChangeHandler}
            />

            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
