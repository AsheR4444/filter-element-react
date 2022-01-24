import React, { useState } from 'react'

import { Button } from '../../../Button'
import { Range } from '../../../Range'

import { ReactComponent as Arrow } from '../../../../layout/svg/arrow.svg'
import { ReactComponent as Cross } from '../../../../layout/svg/cross.svg'

export const Parameter = ({ title, type, parameterMin, parameterMax, values }) => {
    const [isChanged, setIsChanged] = useState(false)
    const [isOpened, setIsOpened] = useState(false)

    const openHandler = () => setIsOpened(!isOpened)

    let ParameterContent

    const resetSettings = () => {}

    switch (type) {
        case 'numbers':
            ParameterContent = () => (
                <Range
                    min={parameterMin}
                    max={parameterMax}
                    onReset={resetSettings}
                    onChange={({ min, max }) => {
                        if (min !== parameterMin || max !== parameterMax) setIsChanged(true)
                    }}
                />
            )
            break
        case 'select':
            ParameterContent = () => (
                <select className="fe-param__input">
                    {values.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </select>
            )
            break
        default:
            ParameterContent = () => '...параметров нет'
            break
    }

    return (
        <li className="fe-param">
            <div className="fe-param__head">
                <Button type={'filter'} opened={isOpened} onClick={openHandler}>
                    {title}
                    <span className="fe-param__button-arrow fe-arrow-button__arrow">
                        <Arrow />
                    </span>
                </Button>

                {isChanged && (
                    <button className="fe-param__clear-button" onClick={resetSettings}>
                        <Cross />
                    </button>
                )}
            </div>

            {isOpened && (
                <div className="fe-param__content">
                    <ParameterContent />
                </div>
            )}
        </li>
    )
}
