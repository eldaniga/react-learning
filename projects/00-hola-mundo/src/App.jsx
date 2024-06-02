import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){

    //const formatUserName = (userName)=> `@${userName}`
    const formatUserName = (userName)=> `@${userName} `

    return(
        <section className="App" >
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing  
            userName="midudev" 
            name="Miguel Angel Duran"/>

            <TwitterFollowCard 
            formatUserName={formatUserName}
            isFollowing={false} 
            userName="ibai" 
            name="Ibai Llanos"/>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            isFollowing 
            userName="elonmusk" 
            name="Miguel Angel Duran"/>

        </section>
        
        
        
    )


}