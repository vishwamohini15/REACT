import { useState } from 'react';
import './App.css';
import Playbutton from './components/Playbutton';
import Video from './components/Video';
import videosDB from './data/Data';
import Addvideo from './components/Addvideo';
function App() {

  const [videos, setVideos] = useState(videosDB)

  function addvideo(video){
      setVideos( [
        ...videos,
        {...video, id:videos.length+1}
])
  }
  return (
    <div className='maindiv' onclick={()=>console.log("app hu")} >

      <div className='container' >
      <Addvideo addVideos={addvideo}></Addvideo>

      {videos.map((video)=>{
         return(
          <Video title={video.title}
          id={video.id}
          views={video.views}
           time={video.time}
           channel={video.channel}
           verifydd={video.verifid} key={video.id}>
            
            <Playbutton
               onclick={()=>console.log("playing-hua", video.title)}
              onpaused={()=>console.log("paused-hua", video.title)}
              >{video.title}</Playbutton>
           </Video>
         )
      })}
      
    </div>

    </div>
  );
}

export default App;
