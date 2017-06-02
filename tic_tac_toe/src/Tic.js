import React, { Component } from 'react';
class Tic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: ['','','','','','','','',''],
            nextToken:'X',
            winner:''
        }
    }

    nextMove = (x)=> {
        if((this.state.board[x] !== '') || (this.state.winner)) return
        let lt='X'
        if(this.state.nextToken==='X') lt = '0'
        let arrBoard = this.state.board;
        arrBoard[x] = this.state.nextToken
        this.setState({board:arrBoard, nextToken:lt});

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
               console.log('Winner: ', currBoard[x]);
                this.setState({winner:'Player '+currBoard[x] +' wins'});
          }
        }
    }

    render() {
         return ( 
             <div className="container">
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
                <div className="win">{this.state.winner}</div>                             
             </div>
        ); 
        }
    }
export default Tic;