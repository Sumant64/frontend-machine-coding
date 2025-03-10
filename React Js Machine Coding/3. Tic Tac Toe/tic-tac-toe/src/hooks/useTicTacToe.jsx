import React, { useState } from 'react'

let board = new Array(9).fill(null);

const useTicTacToe = ({playerX, playerO}) => {
    const [initialBoard, setInitialBoard] = useState(board);
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [winner, setWinner] = useState("");

    const winningPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWinner = (board) => {
        for(let i = 0; i < winningPattern.length; i++) {
            const [a, b, c] = winningPattern[i];
            if(board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
                return board[a]
            }
        }
        return "";
    }


    const handleBoxClick = (index) => {
        let winnerCheck = checkWinner(initialBoard);
        if(winnerCheck) {
            setWinner(winnerCheck)
            return;
        }

        let board = [...initialBoard];

        
        if(board[index] === null) {
            board[index] = isPlayerX ? "X" : "O";
            setInitialBoard(board);
            setIsPlayerX((prev) => !prev);
        }

    }

    const getStatusMessage = () => {
        const winner = checkWinner(initialBoard);
        if(winner) return winner;
        else return false
    }

    const resetGame = () => {
        setInitialBoard(board);
        setIsPlayerX(true);
    }

    return {
        initialBoard,
        isPlayerX,
        handleBoxClick,
        winner,
        getStatusMessage,
        resetGame
    }
    
}

export default useTicTacToe