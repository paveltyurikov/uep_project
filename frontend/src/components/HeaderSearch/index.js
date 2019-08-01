import React from 'react';
import './styles.scss';

export default class HeaderSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }
    }

    onSearchInput = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    render() {
        const { showSearch, onSearchClick } = this.props;
        return (
            <div className={showSearch ? 'header-search header-search-opened' : 'header-search'}>

                <form data-key="300ae6e9e7afedc7dafc34b68384b0ce30f24563" action="stranicza-poiska/" method="get" className="well msearch2 header-search-area" id="mse2_form">
                    <input
                        type="text"
                        className="header-search-field ui-placeholder ui-autocomplete-input"
                        name="query"
                        placeholder="Что вы хотите найти?"
                        value={this.state.searchQuery}
                        autoComplete="off"
                        onChange={(e) => this.onSearchInput(e)}
                    ></input>

                    <button type="submit" className="header-search-btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                <div className="header-cancel">
                    <i className="fa fa-times cancel" aria-hidden="true" onClick={onSearchClick}></i>
                </div>
            </div>
        )
    }

}