import { useState } from "react";
import Footer from "../components/Footer";

function Square({value, onSquareClick}){
    return <button className="btn btn-square btn-secondary" onClick={onSquareClick}>{value}</button>
}

function Board({xIsNext, squares, onPlay }){

    function handleClick(i){
        if (squares[i] || winner(squares)) return;
        const nextSquare = squares.slice();
        nextSquare[i] = xIsNext ? "X" : "O"; 
        
        onPlay(nextSquare);
    }
    const champion = winner(squares);
    let status = '';
    if (champion) {
        status = `Congrats! ${champion} You're the winner`;
    } else{
        status = `It's ur turn : ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <>
        <div className="artboard artboard-horizontal phone-3 bg-white mx-auto  rounded-sm">
            <p className="text-lg text-slate-500">{status}</p>
            <div className=" w-40 flex mt-14 mx-auto align-middle gap-1 border-red-600 flex-wrap">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]}  onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]}  onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]}  onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]}  onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]}  onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]}  onSquareClick={() => handleClick(8)} />
            </div>
        </div>
        </>
    )
}

export default function Games(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;


    function handlePlay(nextSquare){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
        let description = '';
        if (move > 0) {
            description = `Throwback to ${move}`;
        } else{
            description = 'Throwback to Start';
        }
        
        return(
            <li className="menu my-2 bg-fuchsia-500 text-white rounded-md" key={move}>
                <button onClick={()=>jumpTo(move)}>
                {description}
                </button>
            </li>
        )
    })


    return(
        <>
        <div className="game flex w-full">
            <div className="game-board grid flex-grow card  rounded-box place-items-center">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="game-info grid flex-grow card rounded-box place-items-center">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
        <Footer/>
        </>
    )
}

function winner(square){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return false;
}
