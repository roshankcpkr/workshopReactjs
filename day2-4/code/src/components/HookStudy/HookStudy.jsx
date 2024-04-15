//useState 
//useEffect

import React, {useState, useEffect} from 'react';


const HookStudy = ()=>{

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Roshan");

    useEffect(()=>{
        console.log("Hello updating");

        // cleanup function
        return()=>{
            console.log("component dstroy");
        }
    },[count])

    return (
        <div>
            {/* {name} */}
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)} >Increase</button>
            <button onClick={()=> setCount(count - 1)}>Decrease</button>
            <button onClick={()=>setName("Elvik")}>Change name</button>
        </div>
    )
}
export default HookStudy;