import { useContext } from 'react';
import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext'
import './inputBox.css'

const InputBox = ({ labelText, type }) => {

    const { LoanCalculatorContext } = useLoanCalculatorContext();
    const { LoanCalc, changeLoanCalcProp } = useContext(LoanCalculatorContext);


    return (

        <div className="input-box">

            <input
                type='number'
                required
                step="any"
                onChange={e => changeLoanCalcProp(type, e.target.value)}
                value={type === "SET_DOWN_PAYMENT" ? LoanCalc.downPaymentPercentage : undefined}
            />

            <span className="input-label">{labelText}</span>

        </div>
    )
}

export default InputBox