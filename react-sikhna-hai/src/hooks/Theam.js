import { useContext } from "react";
import TheamContext from "../context/Theamcontex";

function useThom(){
return   useContext(TheamContext)
}

export default useThom