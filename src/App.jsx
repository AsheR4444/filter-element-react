import React, { useState } from 'react'

import { api as filterParameters } from './API'

import { Button } from './components/Button/Button'
import { Filter } from './components/Filter/Filter'

import { ReactComponent as Arrow } from './layout/svg/arrow.svg'

export const App = () => {
    const [isFilterOpened, setisFilterOpened] = useState(false)

    const openFilter = () => {
        setisFilterOpened(!isFilterOpened)
    }

    return (
        <div className="fe-app">
            <div className="fe-main-wrapper">
                <div className="fe-head">
                    <Button onClick={openFilter} type="init" opened={isFilterOpened}>
                        Подбор по параметрам
                        <span className="fe-init-button__arrow fe-arrow-button__arrow">
                            <Arrow />
                        </span>
                    </Button>
                </div>

                <Filter opened={isFilterOpened} parametersList={filterParameters} />
            </div>
        </div>
    )
}
