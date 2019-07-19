import React from 'react'
import {Redirect} from 'react-router-dom'

const RedirectApp = ({content})=><Redirect to={content}/>;

export default RedirectApp