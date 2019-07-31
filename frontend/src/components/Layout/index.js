import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom';
import Container from 'components/Container'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Messages from 'apps/Messages'
import './styles.scss'
import Footer from 'components/Footer'

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


export default function AppLayout({children}) {

    return (
        <>
            <Header>
                <Navigation/>
            </Header>
            <Container id={"banner_holder"}>
                <BannerPortal/>
            </Container>
            <section id="content">
                <Container>
                    {children}
                </Container>
            </section>

            <Footer/>
            <Messages/>
        </>
    )
}