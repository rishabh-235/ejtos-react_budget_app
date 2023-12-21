import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [newCurrency,setNewCurrency]=useState(currency);
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

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <select className="form-select" onChange={handleCurrencyChange} value={"currency="+newCurrency}>
                <option value=" ">Select Currency</option>
                <option value="&#8377;">&#8377;</option>
                <option value="&#36;">&#36;</option>
                <option value="&#8364;">&#8364;</option>
                <option value="&#163;">&#163;</option>
            </select>
        </div>
    );
};
export default Budget;
