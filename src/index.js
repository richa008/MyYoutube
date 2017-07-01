import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'
const API_KEY = "AIzaSyBJHjT_GU1CEjCVlT-1qdzYXl9K_ZXBPFI";

class App extends Component {
    constructor(props) {
        super(props);
        // Initialize videos
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("surfboards");
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }) 
        });
    }; 

    render() {
        return (
            //passing props
            <div>
                <SearchBar onSearchTermChange = {this.videoSearch} />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo: selectedVideo})} 
                    videos = {this.state.videos} 
                /> 
            </div>
        );
    }
}


//Put component on DOM. <App /> creates instance of class
ReactDOM.render(<App />, document.getElementById("container"));
