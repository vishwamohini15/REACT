// import { useState } from 'react';
// import './App.css';
// // import Playbutton from './components/Playbutton';
// // import Video from './components/Video';
// import videosDB from './data/Data';
// import Addvideo from './components/Addvideo';
// import Videolist from './components/Videolist';
// function App() {

//   const [videos, setVideos] = useState(videosDB)
//   const [editablevideo, setEditablevideo] = useState(null)

//  function addvideo(video){
//   setVideos([
//     ...videos,
//     {...video, id:videos.length+1}
//   ])
//  }

 

//  function deletevideo(id){
//   setVideos(videos.filter((video)=>video.id!==id))
//   console.log(id);
  
//  }

//  function editvideo(id){
//   setEditablevideo(videos.find((video=>video.id===id)));
  
//  }

//  function updatevideo(video){
//   const index=videos.findIndex(v=>v.id===video.id)
//   const newvideo=[...videos]
//   newvideo.splice(index,1,video)
//   setVideos(newvideo)
  
//  }
//   return (
//     <div className='maindiv' onclick={()=>console.log("app hu")} >

//     <Addvideo addvideo={addvideo}  updatevideo={updatevideo} editablevideo={editablevideo}></Addvideo>
//     <Videolist deletevideo={deletevideo} editvideo={editvideo} videos={videos}></Videolist>

//     </div>
//   );
// }

// export default App;


import React from 'react'
import TUMHUM from './TryMySelf/TUMHUM'

const App = () => {
  return (
    <div className='mainApp'>
      <TUMHUM/>
    </div>
  )
}

export default App
