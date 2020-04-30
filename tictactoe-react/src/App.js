import React from 'react';
//import logo from './logo.svg';
import './App.css';

/*class Square extends React.Component{
  render(){
    return (
    <button className="square" onClick={()=> this.props.onClick()}>
      {this.props.value}
    </button>
    )
  };
}*/

function  Square(props){
  let className="square";
  if(props.iswin){
    className="square-win";
  }
  return(
    <button className={className} onClick={()=> props.onClick()}>
    {props.value}
  </button>
  )
}

class Board extends React.Component{
  renderSquare(i){
    const winline = this.props.winline;
    console.log(winline);
    let iswin= false;
    if(winline){
      iswin=winline.indexOf(i)>=0?true:false;
    }
    return <Square 
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
              iswin={iswin}
              />
  }
  render(){
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      history:[{
        squares:Array(9).fill(null),
      }],
      stepNumber:0,
      xIsNext:true,
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if(squares[i]||calculateWinner(squares)){
      return;
    }
    squares[i]=this.state.xIsNext?"X":"O";
    this.setState({
      history:history.concat([{squares:squares}]),
      stepNumber:history.length,
      xIsNext:!this.state.xIsNext});
  }

  jumpTo(step){
    this.setState({
      stepNumber:step,
      xIsNext:(step % 2) === 0,
    })
  }
  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move)=>{
      const desc = move?
      "Go to Move #"+move:"Go to game start";
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    let winline=null;
    if(winner){
      winline=getWinLine(current.squares)
      console.log(winline);
      status="Winner:"+winner;
    }
    else{
      status = "Next player:"+(this.state.xIsNext?"X":"O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
            winline={winline}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>;
          <ol>{moves}</ol>;
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    if(winner){
      setTimeout(()=>{
        alert("Winner is "+winner+"!")},100
      );     
    }
    if(isDraw(current.squares)){
      setTimeout(()=>{
        alert("It's a draw!")},100
      );     
    }
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function getWinLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}


function isDraw(squares) {
  for(let i = 0;i<squares.length;i++){
    if(!squares[i])return false;
  }
  if(calculateWinner(squares))
    return false;
  return true;
}

function App() {
  return (
    <Game />
  );
}
export default App;
