import React, {Component} from 'React'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        //Initialize state. Render re-runs whenever state changes. Never change state using this.state.term = "". 
        //Always use setState
        this.state = {  term: ""}
    }
    render() {
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;