import React, { useState } from 'react'
import './amortizationSchedule.css'

import { AmortizationContainerTitle, AmortizationScheduleTable } from './components/componentExports'

const AmortizationSchedule = () => {

    const [showScheduleList, setShowScheduleList] = useState(true);

    return (
        <div className="container">

            <AmortizationContainerTitle showScheduleList={showScheduleList} setShowScheduleList={setShowScheduleList} />
            <AmortizationScheduleTable showScheduleList={showScheduleList} />

        </div>
    )
}

export default AmortizationSchedule