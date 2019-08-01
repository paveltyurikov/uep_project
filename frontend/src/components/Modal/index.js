import React, { Component } from "react";
import ReactDOM from "react-dom";
import './styles.scss';

export default class Modal extends Component {
    state = { show: false };

    handleClick = () => {
        if (!this.state.show) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    render() {
        const { className, buttonText, children } = this.props;
        return (
            <>
                <div className={this.state.show ? "modal display-block" : "modal display-none"}>
                    <section className="modal-main" ref={node => { this.node = node; }}>
                        <div className="close">
                            <i className="fa fa-times" onClick={this.handleClick}></i>
                        </div>
                        {children}
                    </section>
                </div>
                <button type="button" onClick={this.handleClick} className={className}>
                    <span>{buttonText}</span>
                </button>
            </>
        );
    }
}

const container = document.createElement("div");
container.style.display = 'none';
document.body.appendChild(container);
ReactDOM.render(<Modal />, container);