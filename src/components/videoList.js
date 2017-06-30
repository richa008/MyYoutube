import React from 'react';
import VideoListItem from './videoListItem'

//Use functional components if there is no state to be manipulated. Only rendering needs to be done
//Use class components if state manipulation is needed
const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}    
        </ul>
    );
};

export default VideoList;