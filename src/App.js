import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';

import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import ChangeCurrecy from './components/ChangeCurrency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        /* Add Budget component here */
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        /* Add Remaining component here*/
                        <div className='col-sm'>
                            <Remaining />
                        </div>

                    }

                    {
                        /* Add ExpenseTotal component here */
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                    {
                        //changecurrengy

                        <div className='col-sm'>
                            <ChangeCurrecy />
                        </div>
                    }
                    <h3 className='mt-3'>Allocation</h3>
                    {
                        /* Add ExpenseList component here */
                        //ExpenseTotal component
                        <div className='row-sm'>
                            <ExpenseList />
                        </div>
                    }

                    {
                        /* Add ExpenseItem component here */
                        //ExpenseTotal component
                        <div className='row-sm'>
                            <ExpenseItem />
                        </div>
                    }

                    <h3 className='mt-3'>Change Allocation</h3>
                    {
                        /* Add AllocationForm component here under */
                        //ExpenseTotal component
                        <div className='row-sm'>
                            <AllocationForm />
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
