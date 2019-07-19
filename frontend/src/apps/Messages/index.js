import React from 'react'
import {useSelector} from 'react-redux'
import Message from './Message'

import './styles.scss'

export default function Messages() {
    const messages = useSelector(state=>state.messages.messages);

    return (
        <div className="Messages">
            {
                messages.length ?
                    messages.map(message =>
                        <Message
                            key={message.id}
                            {...message}
                        />
                    )
                    : null

            }
        </div>
    )
}