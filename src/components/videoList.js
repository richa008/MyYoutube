import React from 'react';
import VideoListItem from './videoListItem'

//Use functional components if there is no state to be manipulated. Only rendering needs to be done
//Use class components if state manipulation is needed
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (<VideoListItem
            onVideoSelect = {props.onVideoSelect} 
            key = {video.etag} 
            video = {video} />
        )
    });
    return (
        //React automatically renders arrays as li items
        <ul className="list-group">
            {videoItems}     
        </ul>
    );
};

export default VideoList;