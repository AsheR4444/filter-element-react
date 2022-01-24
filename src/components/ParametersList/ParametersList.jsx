import React from 'react'

import { Parameter } from './components/Parameter'

export const ParametersList = ({ list }) => {
    return (
        <ul className="fe-params">
            {list.map(({ type, title, min, max, values, id }) => {
                return (
                    <Parameter
                        key={id}
                        type={type}
                        title={title}
                        values={values}
                        parameterMin={min}
                        parameterMax={max}
                    />
                )
            })}
        </ul>
    )
}
