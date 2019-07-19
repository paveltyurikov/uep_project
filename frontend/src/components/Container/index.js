import React from 'react'
import classnames from 'classnames'

import './styles.scss'

export default function Container({children, ...props}) {
    return (
        <div
            className={classnames('container')}
            {...props}
        >
            {children}
        </div>
    )
}