import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: "x",
  O: "o"
}



const Square = ({children, updateBoard, index}) =>{
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  console.log(board)


  return ( 
    <main className="board">
        <h1>TIC TAC TOE</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
               <Square  onClick key={index} index={index}>
                
               </Square>
              )
            })
          }

        </section>
    </main>
    
  
  )
}

export default App;
