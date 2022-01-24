import React, { useState } from 'react'

import { ParametersList } from '../ParametersList/ParametersList'

export const Filter = ({ opened, parametersList }) => {
    const [parametersQueue, setParameterQueue] = useState(parametersList.slice(0, 4))

    const showParameters = () => {
        if (parametersQueue.length > 4) {
            setParameterQueue(parametersList.slice(0, 4))
        } else {
            setParameterQueue(parametersList)
        }
    }

    return (
        <>
            {opened && (
                <div className="fe-content">
                    <ParametersList list={parametersQueue} />

                    <button className="fe-close-button" onClick={showParameters}>
                        Показать {parametersList.length > 4 ? 'меньше ' : 'больше '}
                        параметров ({parametersList.length})
                    </button>
                </div>
            )}
        </>
    )
}
