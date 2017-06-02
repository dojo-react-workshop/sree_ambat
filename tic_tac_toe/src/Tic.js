import React, { Component } from 'react';
class Tic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: ['','','','','','','','',''],
            nextToken:'X',
            gameOver:false,
            history:[]

        }
    }

    nextMove = (x)=> {
        if((this.state.board[x] !== '') || (this.state.gameOver)) return
        let next;
        if(this.state.nextToken==='X') {
            next = '0'
            let tempHistory = this.state.history;
            tempHistory.push('Player X')
            this.setState({history:tempHistory});
        } else {
            next='X'
            let tempHistory = this.state.history;
            tempHistory.push('Player O')
            this.setState({history:tempHistory});
        }
        let arrBoard = this.state.board;
        arrBoard[x] = this.state.nextToken
        this.setState({board:arrBoard, nextToken:next});

        this.checkWinner(); 
    }

    checkWinner =()=> {
        let currBoard = this.state.board;
        let winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]
        for (let i=0; i<winCombinations.length; i++){
           const [x, y, z] = winCombinations[i]
           if((currBoard[x]) &&((currBoard[x]===currBoard[y]) && (currBoard[x]===currBoard[z]))){
               this.setState({gameOver:true})
                let tempHistory = this.state.history;
                tempHistory[tempHistory.length-1]+=' wins'
                tempHistory.push('(--GAME OVER--)')
                this.setState({history:tempHistory});

          }
        }
    }

    History = () => {
       const moves = this.state.history.map((move, idx)=>{
            return(<li key={move+idx}>{move}</li>)
        })
        return moves
    }

    render() {
         return ( 
             <div className="container">
                <div className="board">
                    <div className="row">
                        <div className="blocks" id='id0_0' onClick={()=>this.nextMove(0)}>{this.state.board[0]}</div>
                        <div className="blocks midcol" onClick={()=>this.nextMove(1)}>{this.state.board[1]}</div>
                        <div className="blocks" onClick={()=>this.nextMove(2)}>{this.state.board[2]}</div>
                    </div>
                    <div className="row midrow">
                        <div className="blocks" onClick={()=>this.nextMove(3)}>{this.state.board[3]}</div>
                        <div className="blocks midcol" onClick={()=>this.nextMove(4)}>{this.state.board[4]}</div>
                        <div className="blocks" onClick={()=>this.nextMove(5)}>{this.state.board[5]}</div>
                    </div>
                    <div className="row">
                        <div className="blocks" onClick={()=>this.nextMove(6)}>{this.state.board[6]}</div>
                        <div className="blocks midcol" onClick={()=>this.nextMove(7)}>{this.state.board[7]}</div>
                        <div className="blocks" onClick={()=>this.nextMove(8)}>{this.state.board[8]}</div>
                    </div>   
                                        
                </div>
                <div className='status'>
                     <ul>{this.History()}</ul>
                </div>
             </div>
        ); 
        }
    }
export default Tic;