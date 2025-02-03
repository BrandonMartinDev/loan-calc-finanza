import React, { useContext } from 'react'
import './amortizationScheduleTable.css'

import { useLoanCalculatorContext } from '../../../../hooks/useLoanCalculatorContext';
const { LoanCalculatorContext } = useLoanCalculatorContext();

import { MonthInfoRow } from '../componentExports';

const AmortizationScheduleList = ({ showScheduleList }) => {

  const { LoanCalc } = useContext(LoanCalculatorContext);

  return (
    <table className='amortization-schedule-table'>

      <thead className="amortization-schedule-header">

        <tr>
          <th className='amortization-schedule-header-text'>Month</th>
          <th className='amortization-schedule-header-text'>Payment</th>
          <th className='amortization-schedule-header-text'>Principal</th>
          <th className='amortization-schedule-header-text'>Interest</th>
          <th className='amortization-schedule-header-text'>Principal Paid</th>
          <th className='amortization-schedule-header-text'>Balance</th>
        </tr>

      </thead>

      {
        (LoanCalc.calculatedMonthlyPayment > 0) && showScheduleList && LoanCalc.amortizationSchedule.map(monthInfo => {
          return <MonthInfoRow key={monthInfo.monthNumber} monthInfo={monthInfo} />
        })
      }

    </table>
  )
}

export default AmortizationScheduleList