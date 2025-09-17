import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const handleSingle = () => {
const updatedRuns = runs + 1;
setRuns(updatedRuns)
    }
    const handleSix = () => {
const updatedRuns = runs + 6;
setRuns(updatedRuns)
    }
    const handleFore = () => {
const updatedRuns = runs + 4;
setRuns(updatedRuns)
    }
   

    return(
        <div>
            {
                runs >= 50 && <p>Your Score : 50</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFore}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}