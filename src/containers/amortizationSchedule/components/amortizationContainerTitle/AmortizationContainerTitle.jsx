import React from 'react'
import './amortizationContainerTitle.css'

const AmortizationContainerTitle = ({ showScheduleList, setShowScheduleList }) => {
  return (
    <div className="amortization-title-container">
      <h2 className='amortization-title'>Amortization Schedule</h2>
      <button

        className={`hide-schedule-button ${showScheduleList === true ? "schedule-button-show" : undefined}`}
        onClick={() => setShowScheduleList(!showScheduleList)}

      >{showScheduleList === true ? "Hide" : "Show"} Schedule</button>
    </div>
  )
}

export default AmortizationContainerTitle