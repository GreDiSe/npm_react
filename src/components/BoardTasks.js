import React, { Component } from 'react';
import '../css/BoardTasks.css';

class BoardTasks extends Component {
    constructor(props){
        super(props);
        this.DONE = 1;
        this.IN_PROGRESS = 0;
    }

    changeTaskStatus = () => {
        this.props.task.status = this.props.task.status === this.DONE ? this.IN_PROGRESS : this.DONE;
        this.props.setNewState(this.props.task)
    };

    crossOut = () => {
        return this.props.task.status === this.DONE ? 'crossOut' : 'notCrossOut';
    };

    render(){
        console.log(this.props.task);
        return (
            <div className={'BoardTasks'}>
                <h5 className={this.crossOut()} onClick={this.changeTaskStatus}>{this.props.task.name}</h5>
                <div onClick={this.props.removeTask} className={'BoardTaskDeleteTask'}/>
            </div>
        )
    }
}
export default BoardTasks;