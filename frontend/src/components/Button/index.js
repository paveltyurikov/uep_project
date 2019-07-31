import React from 'react'
import {withRouter} from 'react-router'
import classnames from 'classnames'
import './styles.scss'

function ActionButton({
                          action,
                          style,
                          onClick,
                          className,
                          disabled,
                          type = 'button',
                          loading,
                          children,
                          leftIcon,
                          rightIcon,
                          history,
                          ...other
                      }) {

    const handleClick = action ? () => history.push(action) : onClick;

    return (
        <button
            style={style}
            className={classnames(
                'btn',
                {'btn--loading': loading},
                {'btn-icon': leftIcon || rightIcon},
                {'btn-icon--left': leftIcon},
                {'btn-icon--right': rightIcon},
                {[className]: className}
            )}
            type={type}
            onClick={handleClick}
            disabled={disabled || loading}
        >
            {
                leftIcon
            }

            {children}
            {
                rightIcon
            }
        </button>
    )
}

export const ActButton = withRouter(ActionButton);


const Button = ({
                    style,
                    onClick,
                    className,
                    disabled,
                    type = 'button',
                    loading,
                    children,
                    leftIcon,
                    rightIcon
                }) =>

    <button
        style={style}
        className={classnames(
            'btn',
            {'btn--loading': loading},
            {'btn-icon': leftIcon || rightIcon},
            {'btn-icon--left': leftIcon},
            {'btn-icon--right': rightIcon},
            {[className]: className}
        )}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
    >
        {
            leftIcon
        }

        {children}
        {
            rightIcon
        }
    </button>;

export default Button