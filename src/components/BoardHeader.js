import React, { Component } from 'react';
import '../css/BoardHeader.css';

class BoardHeader extends Component {
    constructor(props){
        super(props);
        this.DONE = 'DONE';
        this.IN_PROGRESS = "IN_PROGRESS";

    }

    addTaskName = () => {
        const name = this.refs.lineTaskName.value;
        const newBoard = this.props.board;

        this.refs.lineTaskName.value = '';
        newBoard.tasks.push({name: name, status: this.IN_PROGRESS});
        console.log(newBoard);
        this.props.setNewState(newBoard);
    };


    render(){
        return(
            <div className={'BoardName'}>
                <div className={'exitPosition'}>
                    <h3>{this.props.board.name}</h3>
                    <div onClick={this.props.removeBoard} className={'BoardDeleteTask'}/>
                </div>

                <div className={'BoardNameEditLine'}>
                    <input
                        ref={'lineTaskName'}
                        type={'text'}
                        placeholder={'Enter here...'}
                    />
                    <button onClick={this.addTaskName}>OK</button>
                </div>

            </div>
        )
    }
}
export default BoardHeader;
