import React from 'react'
import classnames from 'classnames'
import './styles.scss'

export default function Card({className, children}) {
    return (
        <div className={classnames(
            'Card',
            {[className]: className}
        )}>{children}</div>
    )
}