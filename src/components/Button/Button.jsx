import React from 'react'

export const Button = ({ onClick, children, type, opened }) => {
    let classNames = ['fe-arrow-button']

    if (opened) {
        classNames.push('is-opened')
    }

    if (type === 'init') {
        classNames.push('fe-init-button')
    } else if (type === 'filter') {
        classNames.push('fe-param__button')
    }

    return (
        <button className={classNames.join(' ')} onClick={onClick} type="button">
            {children}
        </button>
    )
}
