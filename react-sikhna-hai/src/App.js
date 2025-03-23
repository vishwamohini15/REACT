import { useReducer, useState } from 'react';
import './App.css';
// import Playbutton from './components/Playbutton';
// import Video from './components/Video';
import videosDB from './data/Data';
import Addvideo from './components/Addvideo';
import Videolist from './components/Videolist';
import TheamContext from './context/Theamcontex';
import VideosContext from './context/VideoContext';
import VideoDispatchContext from './context/VideoDispatchCntx';
import Counter from './components/Counter';
// import { type } from '@testing-library/user-event/dist/type';



function App() {
  const [editablevideo, setEditablevideo] = useState(null)
  const[mode, setmode]=useState('dark')

  function videoReducer(videos, action){
    switch(action.type){
      case 'ADD':
        return [
          ...videos,
          {...action.payload, id:videos.length+1}
        ]
        case 'DELETE':
          return videos.filter((video)=>video.id!==action.payload)
          case 'UPDATE' :
            const index=videos.findIndex(v=>v.id===action.payload.id)
            const newvideo=[...videos]
            newvideo.splice(index,1,action.payload)
            setEditablevideo(null)
            return newvideo;
        default:
          return videos
    }
  }

  const [videos, dispatch]=useReducer(videoReducer, videosDB)


//  const theamContext=useContext(TheamContext)
//  console.log({theamContext});
 


 function editvideo(id){
  setEditablevideo(videos.find((video=>video.id===id)));
  
 }
  return (
    <TheamContext.Provider  value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
      <button onClick={()=>setmode(mode ==='dark' ? 'light':'dark' )} >butoo</button>
      <Counter/>
    <div className={`maindiv ${mode}`} onclick={()=>console.log("app hu")} >

    <Addvideo    editablevideo={editablevideo}></Addvideo>
    <Videolist  editvideo={editvideo} ></Videolist>

    </div>
    </VideoDispatchContext.Provider>
    </VideosContext.Provider>
    </TheamContext.Provider>
  );
}

export default App;



