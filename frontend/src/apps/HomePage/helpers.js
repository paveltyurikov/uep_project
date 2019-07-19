import React from 'react'
import './helpers.scss'

export const HPHeader = ({children, ...props}) => <h2 className='text-center hp-header' {...props}>{children}</h2>;
export const HPBlock = ({children, ...props}) => <div className="HPBlock" {...props}>{children}</div>;
