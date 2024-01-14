import React, { useContext } from 'react'
import './inputForm.css'

import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext';

import { InputBox } from '../componentExports'

const InputForm = () => {

    const { LoanCalculatorContext } = useLoanCalculatorContext();
    const { LoanCalc, changeLoanCalcProp } = useContext(LoanCalculatorContext);

    return (
        <form className='loan-info-input'>

            <InputBox
                labelText="Loan Amount"
                type="SET_PRINCIPAL"
            />

            <div className="double-form-input">

                <InputBox
                    labelText="Term (Years)"
                    type="SET_TERM_YEARS"
                />

                <InputBox
                    labelText="Term (Months)"
                    type="SET_TERM_MONTHS"
                />

            </div>

            <InputBox
                labelText='Interest Rate (%)'
                type="SET_INTEREST_RATE"
            />

            <div className="down-payment-form-input">

                <InputBox
                    labelText='Down Payment (%)'
                    type="SET_DOWN_PAYMENT"
                    value={LoanCalc.downPaymentPercentage}
                />

                <button

                    type="button"
                    className={`down-payment-button ${LoanCalc.downPaymentPercentage === 0 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeLoanCalcProp("SET_DOWN_PAYMENT", 0)
                    }}

                >0%</button>

                <button

                    type="button"
                    className={`down-payment-button ${LoanCalc.downPaymentPercentage === 10 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeLoanCalcProp("SET_DOWN_PAYMENT", 10)
                    }}

                >10%</button>

                <button

                    type="button"
                    className={`down-payment-button ${LoanCalc.downPaymentPercentage === 15 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeLoanCalcProp("SET_DOWN_PAYMENT", 15)
                    }}

                >15%</button>

                <button

                    type="button"
                    className={`down-payment-button ${LoanCalc.downPaymentPercentage === 20 ? "selected-down-payment-button" : null}`}
                    onClick={() => {
                        changeLoanCalcProp("SET_DOWN_PAYMENT", 20)
                    }}

                >20%</button>

            </div>

            {/* <div className="calculate-button-container">
                <button
                    type='submit'
                    className='calculate-button'
                >Calculate</button>
            </div> */}

        </form>
    )
}

export default InputForm