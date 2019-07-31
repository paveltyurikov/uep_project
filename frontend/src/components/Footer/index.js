import React from 'react'
import Container from 'components/Container'
import FooterNav from './Nav'
import ContactForm from 'apps/ContactForm'
import ContactInfo from './ContactInfo'
import './styles.scss'

export default function Footer() {
    return (
        <footer className="Footer">
            <Container>
                <div className="f-row">
                    <div className="f-col">
                        <ContactForm/>
                    </div>
                    <div className="f-col">
                        <ContactInfo/>
                    </div>
                </div>
                <FooterNav/>
            </Container>
        </footer>
    )
}