import React, { Component } from 'react';
import '../css/Board.css';
import BoardName from "./BoardName";
import BoardTasks from "./BoardTasks";


class Board extends Component {
    constructor(props){
        super(props);
    }

    changeTaskToBoard = (value, index) => {
        this.props.board.tasks[index] = value;
        this.props.setNewState(this.props.board);
    };



    removeTask = index => {
        this.props.board.tasks.splice(index, 1);
        this.props.setNewState(this.props.board);
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
                <BoardName
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
