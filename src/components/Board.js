import React, { Component } from 'react';
import '../css/Board.css';
import BoardHeader from "./BoardHeader";
import BoardTasks from "./BoardTask";

class Board extends Component {
    changeTaskToBoard = (value, index) => {
        const newBoard = this.props.board;
        newBoard.tasks[index] = value;
        this.props.setNewState(newBoard);
    };

    removeTask = index => {
        const newBoard = Object.assign({}, this.props.board);
        newBoard.tasks.splice(index, 1);
        this.props.setNewState(newBoard);
    };

    renderBoardTask = () => {
        return this.props.board.tasks.map((curTask, i) => {
            return (
                <BoardTasks
                    key={i}
                    task={curTask}
                    removeTask={() => this.removeTask(i)}
                    setNewState={value => this.changeTaskToBoard(value, i)}
                />
            )
        });
    };

    render(){
        return(
            <div className={'board'}>
                <BoardHeader
                    removeBoard={this.props.removeBoard}
                    board={this.props.board}
                    setNewState={this.props.setNewState}
                />
                {this.renderBoardTask()}
            </div>
        )
    }
}
export default Board;
