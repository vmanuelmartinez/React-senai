import { useState } from "react"


export default function Count(){

    const [count, setCount] = useState(0)
    return(
       
        <div>
            <p>Clicaste {count} veces </p>
            <button onClick={ () => setCount(count + 1)}>Clic aquí</button>
        </div>
        
    )
}
