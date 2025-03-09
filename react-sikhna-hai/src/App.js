import './App.css';
import Video from './components/Video';
import videos from './data/Data';
function App() {


  return (
    <div className='container'>
      {videos.map((video)=>{
         return(
          <Video title={video.title}
          id={video.id}
          views={video.views}
           time={video.time}
           channel={video.channel}
           verifydd={video.verifid} key={video.id}/>
         )
      })}
      

    </div>
  );
}

export default App;
