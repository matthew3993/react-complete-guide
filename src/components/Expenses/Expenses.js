import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    // console.log('Expenses: ---START---');
    const [selectedYear, setSelectedYear] = useState('2020');

    const yearChangeHandler = (selectedYear) => {
        // console.log('yearChangeHandler: setting selectedYear = ' + selectedYear);
        setSelectedYear(selectedYear);
    };

    // HOW IS THIS WORKING?!?!? => It is working, because if State is updated, function (component) to which it belong is called - RE-evaluated (enable logs and check them in console)\
    // see notes in 'ExpenseItem' - calling 'state updating function' will execute 'parent' component function
    // console.log('Expenses: filtering expenses..., selectedYear: ', selectedYear);
    const filteredExpenses = props.items
        .filter(expense => expense.date.getFullYear().toString() === selectedYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selectedYear={selectedYear}
                onYearChange={yearChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
