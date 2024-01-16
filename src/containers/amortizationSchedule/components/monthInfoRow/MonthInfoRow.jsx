import React from 'react'

import './monthInfoRow.css'

const MonthInfoRow = ({ monthInfo }) => {
    if (monthInfo && monthInfo.newPrincipalBalance >= 0) {
        return (
            <tr className={`amortization-schedule-month-info-row ${monthInfo.monthNumber % 2 === 0 ? "row-light" : "row-dark"}`}>
                <td className='amortization-schedule-month-info-text'>{monthInfo.monthNumber + 1}</td>
                <td className='amortization-schedule-month-info-text'>{monthInfo.totalPayment}</td>
                <td className='amortization-schedule-month-info-text'>{monthInfo.principalPayment}</td>
                <td className='amortization-schedule-month-info-text'>{monthInfo.interestPayment}</td>
                <td className='amortization-schedule-month-info-text'>{monthInfo.totalPrincipalPaid}</td>
                <td className='amortization-schedule-month-info-text'>{monthInfo.newPrincipalBalance}</td>
            </tr>
        )
    }
}

export default MonthInfoRow