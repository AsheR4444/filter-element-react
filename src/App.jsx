import React, { useState } from 'react'

import { api as filterParameters } from './API'
import { Button } from './components/Button/Button'
import { ParametersList } from './components/ParametersList/ParametersList'

import { ReactComponent as Arrow } from './layout/svg/arrow.svg'

export const App = () => {
    const [isFilterOpened, setisFilterOpened] = useState(false)
    const [parametersQueue, setParameterQueue] = useState(filterParameters.slice(0, 4))

    const openFilter = () => {
        setisFilterOpened(!isFilterOpened)
    }

    const showParameters = () => {
        if (parametersQueue.length > 4) {
            setParameterQueue(filterParameters.slice(0, 4))
        } else {
            setParameterQueue(filterParameters)
        }
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

                {isFilterOpened && (
                    <div className="fe-content">
                        <ParametersList list={parametersQueue} />

                        <button className="fe-close-button" onClick={showParameters}>
                            Показать {parametersQueue.length > 4 ? 'меньше ' : 'больше '}
                            параметров ({filterParameters.length})
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
