import React from 'react';
import {onPageClick} from 'utils/pageClick'
import './index.scss'

const StaticContent = ({content}) =>
    <div
        onClick={onPageClick}
        className="static-content"
        dangerouslySetInnerHTML={{__html: content}}
    />;

export default StaticContent;