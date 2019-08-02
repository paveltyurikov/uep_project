import React from 'react'
import Container from 'components/Container'
import ContactForm from 'apps/ContactForm'
import ContactInfo from './ContactInfo'
import './styles.scss'

export default function Footer() {
    return (
        <footer className="Footer">
            <Container id="contacts">
                <div className="f-row">
                    <div className="f-col">
                        <ContactForm/>
                    </div>
                    <div className="f-col">
                        <ContactInfo/>
                    </div>
                </div>
            </Container>
        </footer>
    )
}