import React, { useContext } from 'react'
import './amortizationScheduleList.css'

import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext';

const { LoanCalculatorContext } = useLoanCalculatorContext();

const AmortizationScheduleList = ({ showScheduleList }) => {

  const { LoanCalc } = useContext(LoanCalculatorContext);

  return showScheduleList && <div>{JSON.stringify(LoanCalc.amortizationSchedule)}</div>
}

export default AmortizationScheduleList