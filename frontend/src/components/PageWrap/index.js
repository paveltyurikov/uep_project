import React from 'react'

export default function PageWrap({style, children}) {
    return (
        <div style={
            {backgroundColor: '#fff', ...style}

        } className="PageWrap">{children}</div>
    )
}