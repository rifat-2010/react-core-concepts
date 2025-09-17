import { useState } from "react"
export default function BolerMan(){
    const [runs, setRuns] = useState(0);
    const singleRuns = () => {
       let updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const RunsFore = () => {
       let updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const RunsSix = () => {
       let updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }


    return(
       <div>
         <h2>BOller er Kela</h2>
         <h1>Score : {runs}</h1>
        <button onClick={singleRuns}>Singles</button>
        <button onClick={RunsFore}>Four</button>
        <button onClick={RunsSix}>Six</button>
        <hr /><hr /><hr />
       </div>
    )
}