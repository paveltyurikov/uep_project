import React from 'react'
import {connectMessagesActions} from 'apps/Messages/connectors'
import {IconClose} from 'components/svg'

function Message({id, title, message, removeMessage}) {

    const onClose = () => {
        removeMessage(id);
    };

    return (
        <div className="Message">
            <div className="Message__head">
                {title ? <div className="Message__title" dangerouslySetInnerHTML={{__html: title}}/> : null}
                <span style={{marginLeft: 'auto'}} onClick={onClose}>
                <IconClose className="Message__close" fill="#ffffff"/>
                </span>
            </div>
            <div className="Message__text" title="Закрыть" dangerouslySetInnerHTML={{__html: message}}/>
        </div>
    )
}

export default connectMessagesActions(Message)
