import React from 'react'

import './monthInfoRow.css'

const MonthInfoRow = ({ monthInfo }) => {
    return (
        <tr className='amortization-schedule-month-info-row'>
            <td className='amortization-schedule-month-info-text'>{monthInfo.monthNumber}</td>
            <td className='amortization-schedule-month-info-text'>{monthInfo.totalPayment}</td>
            <td className='amortization-schedule-month-info-text'>{monthInfo.principalPayment}</td>
            <td className='amortization-schedule-month-info-text'>{monthInfo.interestPayment}</td>
            <td className='amortization-schedule-month-info-text'>{monthInfo.totalPrincipalPaid}</td>
            <td className='amortization-schedule-month-info-text'>{monthInfo.newPrincipalBalance}</td>
        </tr>
    )
}

export default MonthInfoRow