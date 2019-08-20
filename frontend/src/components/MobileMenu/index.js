import React from 'react';
import './styles.scss';

export default class MobileMenu extends React.Component {
    state = {
        display: 'none'
    }
    onClose = () => {
        this.setState({
            display: 'none'
        })
    }
    onOpen = () => {
        this.setState({
            display: 'block'
        })
    }
    render() {
        return (
            <>
                <div className="mm-wrap" style={{ ...this.state }}>
                    <div className="mm-inner">
                        <div className="mm-header">
                            <a className="mm-logo" href="/"></a>
                            <a onClick={this.onClose} className="mm-close-btn"></a>
                        </div>
                        <div className="mobile-menu">
                            <a onClick={this.onClose} href="/#content">Направления</a>
                            <a onClick={this.onClose} href="/#HomePage_Projects">Решения</a>
                            <a href="/vacancies">Работа</a>
                            <a onClick={this.onClose} href="/#contacts">Контакты</a>
                        </div>
                        <a href="tel:8495482144" className="mm-phone">+7 (495) 482-15-44</a>
                    </div>
                </div >
                <div
                    className="mm-open-btn"
                    style={this.state.display === 'block' ? { display: 'none' } : null}
                    onClick={this.onOpen}
                ></div>
            </>
        );
    }
}