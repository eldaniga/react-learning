import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: "x",
  O: "o"
}



const Square = ({children, isSelected, wasMarked,  updateBoard, index}) =>{
  const [clickCount, setClickCount] = useState(0);
  const className = `square ${isSelected ? "is-selected" : ''}`
  

  const handleClick = ()=>{
    //console.log("number of clicks " + clickCount)
  
    setClickCount(clickCount+1);
    console.log("number of clicks after clicking: " + clickCount)
    
    //let indexID = index+1;
    if(clickCount ==  1){
      updateBoard(index)
    }
    
  }
  return(
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}






function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)


  const updateBoard = (index)=>{
    //board[index] = turn;   //addding the value
    let newBoard = board;
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn =  turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    console.log("nuevo turno : " + turn + "posicion: " + index)
  
    }
  
  //console.log(board)


  return ( 
    <main className="board">
        <h1>TIC TAC TOE</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
               <Square  key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
               </Square>
              )
            })
          }

        </section>
        <section className='turn'>

          <Square isSelected={turn==TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn==TURNS.O}>{TURNS.O}</Square>
        </section>
    </main>
    
  
  )
}

export default App;
