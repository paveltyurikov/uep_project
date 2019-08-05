import React from 'react'
import Container from 'components/Container'
import './styles.scss'

export default function PageWrap({ children }) {
    return (
        <div className="PageWrap">
            <Container>
                {children}
            </Container>
        </div>
    )
}