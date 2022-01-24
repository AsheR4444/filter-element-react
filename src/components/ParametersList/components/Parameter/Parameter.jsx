import React, { useState } from 'react'

import { Button } from '../../../Button'
import { Range } from '../../../Range/Range'

import { ReactComponent as Arrow } from '../../../../layout/svg/arrow.svg'

export const Parameter = ({ title, type, min, max, values }) => {
    const [isOpened, setIsOpened] = useState(false)

    const openHandler = () => {
        setIsOpened(!isOpened)
    }

    let ParameterContent

    switch (type) {
        case 'numbers':
            ParameterContent = () => (
                <Range min={min} max={max} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
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
            <Button type={'filter'} opened={isOpened} onClick={openHandler}>
                {title}
                <span className="fe-param__button-arrow fe-arrow-button__arrow">
                    <Arrow />
                </span>
            </Button>

            {isOpened && (
                <div className="fe-param__content">
                    <ParameterContent />
                </div>
            )}
        </li>
    )
}
