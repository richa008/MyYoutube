import React, {Component} from 'React'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        //Initialize state. Render re-runs whenever state changes. Never change state using this.state.term = "". 
        //Always use setState
        this.state = {  term: ""}
    }

    onInputChange(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input value = {this.state.term}
                onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;