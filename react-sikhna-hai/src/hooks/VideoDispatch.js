import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchCntx";

function useVideoDispatch(){
return   useContext(VideoDispatchContext)
}

export default useVideoDispatch