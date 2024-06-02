import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){

    return(
        <section className="App" >
            <TwitterFollowCard isFollowing  userName="midudev" name="Miguel Angel Duran"/>
            <TwitterFollowCard isFollowing={false} userName="ibai" name="Ibai Llanos"/>
            <TwitterFollowCard isFollowing userName="elonmusk" name="Miguel Angel Duran"/>

        </section>
        
        
        
    )


}