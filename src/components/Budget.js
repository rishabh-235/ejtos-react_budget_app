import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let total = 0;
        for (let i = 0; i < expenses.length; i++) {
            total += expenses[i].cost;
        }

        if (total > event.target.value) {
            alert("you cannot reduce the budget value lower than the spending")
        }
        else {
            setNewBudget(event.target.value);

            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
