import { useContext } from 'react'

import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext';
const { LoanCalculatorContext } = useLoanCalculatorContext();

import './calculationOutput.css'

const CalculationOutput = () => {

    const { LoanCalc } = useContext(LoanCalculatorContext);

    return (
        <div className='calculation-output-container'>

            <div className="monthly-payment-container">
                <h2 className='monthly-payment-title'>Monthly Payment:</h2>
                <h2 className='monthly-payment-number'>{LoanCalc.calculatedMonthlyPayment > 0 ? LoanCalc.displayMonthlyPayment : "N/A"}</h2>
            </div>

            <div className="calculation-costs-container">

                <ul>

                    <li className="calculation-cost-line">
                        <p>Principal (Loan Amount):</p>
                        <p>{LoanCalc.principal > 0 ? LoanCalc.displayPrincipal : "N/A"}</p>
                    </li>

                    <li className="calculation-cost-line">
                        <p>Total Interest Payments:</p>
                        <p className={`${LoanCalc.totalInterestPayments > 0 ? 'addition-text' : null}`}>{LoanCalc.totalInterestPayments > 0 ? `+${LoanCalc.displayTotalInterestPayments}` : "N/A"}</p>
                    </li>

                    <li className="calculation-cost-line">
                        <p>Down Payment:</p>
                        <p className={`${LoanCalc.downPaymentAmount > 0 ? 'subtraction-text' : null}`}>{LoanCalc.downPaymentAmount > 0 ? `-${LoanCalc.displayDownPaymentAmount}` : "N/A"}</p>
                    </li>

                </ul>

            </div>

            <li className="calculation-cost-line">
                <p>Total Cost{LoanCalc.totalMonths > 0 ? ` (${LoanCalc.totalMonths} mo payments)` : null}:</p>
                <p className={`${LoanCalc.calculatedTotalLoanPaymentMinusDownPayment > 0 ? 'total-cost-number' : null}`}>{LoanCalc.calculatedTotalLoanPaymentMinusDownPayment > 0 ? LoanCalc.displayCalculatedTotalLoanPaymentMinusDownPayment : "N/A"}</p>
            </li>

        </div>
    )
}

export default CalculationOutput