// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import "../App.css";

// const ChangeCurrency = () => {
//     const { currency, dispatch } = useContext(AppContext);
//     const [newCurrency, setNewCurrency] = useState(currency);
//     const [newcon,setNewcon]=useState(" ");
    
//     const handleCurrencyChange = (event) => {
//         const selectedCurrency = event.target.value;
//         setNewCurrency(selectedCurrency);
//         setNewcon("currency");
//         dispatch({
//             type: 'CHG_CURRENCY',
//             payload: selectedCurrency
//         });
//     };



    

//     return (
//         <select className="select" onChange={handleCurrencyChange} value={newcon}>
//             <option value="" disabled hidden>Select Currency</option>
//             <option value="&#36;" >&#36; Dollar</option>
//             <option value="&#163;" >&#163; Pound</option>
//             <option value="&#8364;" >&#8364; Euro</option>
//             <option value="&#8377;" >&#8377; Rupee</option>
//         </select>
//     );
// };

// export default ChangeCurrency;

import React, {useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currency); // You can set the default selected currency here
    const dropdownRef = useRef(null);

    const options = [
        { value: '$ Dollar', label: '$' },
        { value: '£ Pound', label: '£' },
        { value: '€ Euro', label: '€' },
        { value: '₹ Rupee', label: '₹' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        setSelectedCurrency(value);
        dispatch({
                         type: 'CHG_CURRENCY',
                         payload: value
                     });
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-dropdown-container" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span className="dropdown-label">Currency:</span>
                <span className="selected-value">{selectedCurrency}</span>
            </div>
            {isOpen && (
                <div className="dropdown-options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option.label)}
                        >
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChangeCurrency;

