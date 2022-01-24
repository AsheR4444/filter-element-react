import React, { useState, useRef, useCallback, useEffect } from 'react'
import classnames from 'classnames'

export const Range = ({ min, max, onChange, onReset }) => {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const minValRef = useRef(null)
    const maxValRef = useRef(null)
    const range = useRef(null)

    const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max])

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal)
            const maxPercent = getPercent(+maxValRef.current.value)

            if (range.current) {
                range.current.style.left = `${minPercent}%`
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [minVal, getPercent])

    useEffect(() => {
        onChange({ min: minVal, max: maxVal })
    }, [minVal, maxVal, onChange])

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value)
            const maxPercent = getPercent(maxVal)

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [maxVal, getPercent])

    return (
        <>
            <div className="fe-range-wrapper">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1)
                        setMinVal(value)
                        event.target.value = value.toString()
                    }}
                    className={classnames('fe-thumb fe-thumb--zindex-3', {
                        'fe-thumb--zindex-5': minVal > max - 100,
                    })}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1)
                        setMaxVal(value)
                        event.target.value = value.toString()
                    }}
                    className="fe-thumb fe-thumb--zindex-4"
                />

                <div className="fe-range">
                    <div className="fe-range__track" />
                    <div ref={range} className="fe-range__range" />
                </div>
            </div>

            <div className="fe-param__inputs">
                <label className="fe-param__input-wrapper">
                    <input
                        type="text"
                        placeholder="от"
                        className="fe-param__input"
                        onChange={(event) => setMinVal(+event.target.value)}
                    />
                    <span className="fe-param__input-value">{minVal}</span>
                </label>
                <label className="fe-param__input-wrapper">
                    <input
                        type="text"
                        placeholder="до"
                        className="fe-param__input"
                        onChange={(event) => setMaxVal(+event.target.value)}
                    />
                    <span className="fe-param__input-value">{maxVal}</span>
                </label>
            </div>
        </>
    )
}
