import React, { useEffect, useRef } from 'react';
import './App.css';
import 'video.js/dist/video-js.min.css';
import videojs from 'video.js';
import 'videojs-record/dist/css/videojs.record.css';
// import Record from 'videojs-record/dist/videojs.record.js';
function App() {

  const video = useRef()
  useEffect(() => {
    initVideo()
  })

  const initVideo = () => {
    var play = videojs(video.current, {
      controls: true,
    }, function () {
      var player = this;
      window.player = player
      // player.updateSrc([
      //   {
      //     src: 'https://vjs.zencdn.net/v/oceans.mp4?SD',
      //     type: 'video/mp4',
      //     label: 'SD',
      //     res: 360
      //   },
      //   {
      //     src: 'https://vjs.zencdn.net/v/oceans.mp4?HD',
      //     type: 'video/mp4',
      //     label: 'HD',
      //     res: 720
      //   }
      // ])
      player.on('resolutionchange', function () {
        // console.info('Source changed to %s', player.src())
      })
    })
  }
  return (
    <div id="instructions">

      <video id="video_1" ref={video} class=" vjs-default-skin" controls data-setup='{}' >
        <source src="https://vjs.zencdn.net/v/oceans.mp4?sd" type='video/mp4' label='SD' res='480' />
        <source src="https://vjs.zencdn.net/v/oceans.mp4?hd" type='video/mp4' label='HD' res='1080' />
        <source src="https://vjs.zencdn.net/v/oceans.mp4?phone" type='video/mp4' label='phone' res='144' />
        <source src="https://vjs.zencdn.net/v/oceans.mp4?4k" type='video/mp4' label='4k' res='2160' />
      </video>


    </div>
  );
}

export default App;
