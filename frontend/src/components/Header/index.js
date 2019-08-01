import React from 'react'
import Container from 'components/Container'
import UepLogo from 'components/UepLogo'
import HeaderSearch from 'components/HeaderSearch'
import HeaderButtons from 'components/HeaderButtons'
import './styles.scss'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showSearch: false }
    }
    onSearchClick = () => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    render() {
        return (
            <>
                <header>
                    <UepLogo />
                    <Container>
                        {this.props.children}
                        <HeaderButtons onSearchClick={this.onSearchClick} />
                    </Container>
                </header>
                <HeaderSearch showSearch={this.state.showSearch} onSearchClick={this.onSearchClick} />
            </>
        )
    }

}