import { useState } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){
    const [name, setName] = useState("midudev");
    //const formatUserName = (userName)=> `@${userName}`
    const formatUserName = (userName)=> `@${userName} `


    console.log("render with name: ", name)
    return(
        <section className="App" >
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName={name} 
            name="Miguel Angel Duran"/>

            <TwitterFollowCard 
            formatUserName={formatUserName}
            userName="ibai" 
            name="Ibai Llanos"/>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="elonmusk" 
            name="Miguel Angel Duran"/>

            <button onClick={()=>{
                setName("sanchezCastellón")
            }}>Cambio Nombre</button>

        </section>
        
        
        
    )


}