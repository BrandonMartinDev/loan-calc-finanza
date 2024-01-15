import React, { useState } from 'react'
import './amortizationSchedule.css'

import { AmortizationContainerTitle, AmortizationScheduleList } from './components/componentExports'

const AmortizationSchedule = () => {

    const [showScheduleList, setShowScheduleList] = useState(true);

    return (
        <div className="container">

            <AmortizationContainerTitle showScheduleList={showScheduleList} setShowScheduleList={setShowScheduleList} />
            <AmortizationScheduleList showScheduleList={showScheduleList} />

        </div>
    )
}

export default AmortizationSchedule