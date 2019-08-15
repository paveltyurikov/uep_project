import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';
import Messages from 'apps/Messages'
import './styles.scss'
import Footer from 'components/Footer'
import MobileMenu from 'components/MobileMenu'

export class BannerPortal extends PureComponent {
    constructor(props) {
        super(props)
        this.domElement = null
    }

    componentDidMount() {
        this.domElement = document.getElementById('banner_holder');
        this.forceUpdate()
    }

    render() {
        return this.domElement !== null ? ReactDOM.createPortal(
            this.props.children,
            this.domElement
        )
            :
            null;
    }
}


export default function AppLayout({ children }) {

    return (
        <><MobileMenu />
            {children}
            <Footer />
            <Messages />
        </>
    )
}