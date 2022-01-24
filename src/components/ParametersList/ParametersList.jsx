import React from 'react'

import { Parameter } from './components/Parameter'

export const ParametersList = ({ list }) => {
    return (
        <ul className="fe-params">
            {list.map(({ type, title, min, max, values, id }) => {
                return <Parameter type={type} title={title} min={min} max={max} values={values} key={id} />
            })}
        </ul>
    )
}
