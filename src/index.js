import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'
const API_KEY = "AIzaSyBJHjT_GU1CEjCVlT-1qdzYXl9K_ZXBPFI";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []}; // Initialize videos

        YTSearch({key: API_KEY, term: "surf"}, (videos) => {
            this.setState({videos}) // same as {videos: videos}
        });
    }
    render() {
        return (
            //passing props
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/> 
            </div>
        );
    }
}


//Put component on DOM. <App /> creates instance of class
ReactDOM.render(<App />, document.getElementById("container"));
