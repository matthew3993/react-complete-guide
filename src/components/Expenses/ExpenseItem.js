import React, { useState } from 'react'; // in {} braces - named import

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // 'useState' is one of React's hooks. Hooks start with word 'use'
    // convection: [{nameOfVariable}, set{NameOfVariable}]
    // setTitle is so called 'state updating function'
    const [title, setTitle] = useState(props.title); // registering the hook

    // let title = props.title;

    const clickHandler = () => {
        // title = 'Updated!';
        setTitle('Updated!'); // calling 'state updating function' will execute 'parent' component function
        
        // calling 'state updating function' doesn't change the value right away, but instead it shedules the state update
        // that is the eason why old (not updated) values are logged
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
