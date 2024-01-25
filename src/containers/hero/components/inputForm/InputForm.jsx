import React, { useContext, useReducer } from 'react'
import './inputForm.css'

import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext';

import { InputBox } from '../componentExports'

const InputForm = () => {

    const { LoanCalculatorContext } = useLoanCalculatorContext();
    const { loanDispatch, changeLoanCalcProp } = useContext(LoanCalculatorContext);

    const [

        {
            principal,
            termYears,
            termMonths,
            interestRatePercentage,
            downPaymentPercentage
        },

        formDispatch

    ] = useReducer((existingState, action) => {

        switch (action.type) {
            case "SET_FORM_PRINCIPAL":
                return { ...existingState, principal: action.payload };
            case "SET_FORM_TERM_YEARS":
                return { ...existingState, termYears: action.payload };
            case "SET_FORM_TERM_MONTHS":
                return { ...existingState, termMonths: action.payload };
            case "SET_FORM_INTEREST_RATE":
                return { ...existingState, interestRatePercentage: action.payload };
            case "SET_FORM_DOWN_PAYMENT":
                return { ...existingState, downPaymentPercentage: action.payload };
        }

    }, {
        principal: 300000,
        termYears: 30,
        termMonths: 0,
        interestRatePercentage: 5.72,
        downPaymentPercentage: 3.5
    })

    function changeFormInputValue(type, payload) {

        formDispatch({ type: type, payload: payload })

    }

    function handleSubmit(e) {

        e.preventDefault();

        changeLoanCalcProp("SET_PRINCIPAL", principal);
        changeLoanCalcProp("SET_TERM_YEARS", termYears);
        changeLoanCalcProp("SET_TERM_MONTHS", termMonths);
        changeLoanCalcProp("SET_INTEREST_RATE", interestRatePercentage);
        changeLoanCalcProp("SET_DOWN_PAYMENT", downPaymentPercentage);

    }

    return (
        <form className='loan-info-input' onSubmit={handleSubmit}>

            <InputBox
                labelText="Loan Amount"
                type="SET_FORM_PRINCIPAL"
                changeFormInputValue={changeFormInputValue}
                value={principal}
            />

            <div className="double-form-input">

                <InputBox
                    labelText="Term (Years)"
                    type="SET_FORM_TERM_YEARS"
                    changeFormInputValue={changeFormInputValue}
                    value={termYears}
                />

                <InputBox
                    labelText="Term (Months)"
                    type="SET_FORM_TERM_MONTHS"
                    changeFormInputValue={changeFormInputValue}
                    value={termMonths}
                />

            </div>

            <InputBox
                labelText='Interest Rate (%)'
                type="SET_FORM_INTEREST_RATE"
                changeFormInputValue={changeFormInputValue}
                value={interestRatePercentage}
            />

            <div className="down-payment-form-input">

                <InputBox
                    labelText='Down Payment (%)'
                    type="SET_FORM_DOWN_PAYMENT"
                    changeFormInputValue={changeFormInputValue}
                    value={downPaymentPercentage}
                />

                <button

                    type="button"
                    className={`down-payment-button ${downPaymentPercentage === 0 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeFormInputValue("SET_FORM_DOWN_PAYMENT", 0)
                    }}

                >0%</button>

                <button

                    type="button"
                    className={`down-payment-button ${downPaymentPercentage === 10 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeFormInputValue("SET_FORM_DOWN_PAYMENT", 10)
                    }}

                >10%</button>

                <button

                    type="button"
                    className={`down-payment-button ${downPaymentPercentage === 15 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeFormInputValue("SET_FORM_DOWN_PAYMENT", 15)
                    }}

                >15%</button>

                <button

                    type="button"
                    className={`down-payment-button ${downPaymentPercentage === 20 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeFormInputValue("SET_FORM_DOWN_PAYMENT", 20)
                    }}

                >20%</button>

            </div>

            <div className="calculate-button-container">
                <button
                    type='submit'
                    className='calculate-button'
                >Calculate</button>
            </div>

        </form>
    )
}

export default InputForm