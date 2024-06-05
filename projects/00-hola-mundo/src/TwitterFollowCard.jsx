import { useState } from "react";

export function TwitterFollowCard({formatUserName, userName, name}){
    //renderizado condicional
    const [isFollowing, setIsFollowing] = useState(false);
   
    console.log("render with name in TFC: ", userName)

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following"
            : "tw-followCard-button";


            
    const handleClick = ()=>{
                setIsFollowing(!isFollowing)
    }
    return(
        
            <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img className= "tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="Avatar de Midudev" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text} 
                </button>
            </aside>
        </article>

    )


}