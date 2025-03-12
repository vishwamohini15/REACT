import { useState } from 'react';
import './App.css';
// import Playbutton from './components/Playbutton';
// import Video from './components/Video';
import videosDB from './data/Data';
import Addvideo from './components/Addvideo';
import Videolist from './components/Videolist';
import TUMHUM from './TryMySelf/TUMHUM';
function App() {

  const [videos, setVideos] = useState(videosDB)

 function addvideo(video){
  setVideos([
    ...videos,
    {...video, id:videos.length+1}
  ])
 }
  return (
    <div className='maindiv' onclick={()=>console.log("app hu")} >

    <Addvideo addvideo={addvideo}></Addvideo>
    <Videolist videos={videos}></Videolist>

    <TUMHUM/>
    </div>
  );
}

export default App;
