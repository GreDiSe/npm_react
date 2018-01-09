import React, { Component } from 'react';
import './css/App.css';
import Board from "./components/Board";
import BoardAdd from "./components/BoardAdd";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {boards: []};
    }

    changeBoardState = (newState, index) => {
        const newBoard = this.state.boards.concat();
        newBoard[index] = newState;
        this.setState({board: newState});
    };

    addNewBoardState = newState => {
        this.setState(newState)
    };

    removeBoard = index => {
        const newBoard = this.state.boards.concat();
        newBoard.splice(index, 1);
        this.setState({boards: newBoard})
    };

    renderBoards = () => {
        return this.state.boards.map((curBoard, i) => {
            return (
                <Board
                    key={i}
                    board={curBoard}
                    removeBoard={() => this.removeBoard(i)}
                    setNewState={value => this.changeBoardState(value, i)}
                />
            )
        })
    };

    render(){
        console.log(this.state.boards);
        return (
            <div className={'containerForBoards'}>
                {this.renderBoards()}
                <BoardAdd
                    boards={this.state.boards}
                    setNewState={this.addNewBoardState}
                />
            </div>
        )
    }
}
export default App;
