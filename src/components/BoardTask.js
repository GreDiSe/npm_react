import React, { Component } from 'react';
import '../css/BoardTask.css';


class BoardTask extends Component {
    constructor(props){
        super(props);
        this.DONE = 'DONE';
        this.IN_PROGRESS = "IN_PROGRESS";
    }

    changeTaskStatus = () => {
        const newTask = Object.assign({}, this.props.task);
        newTask.status = newTask.status === this.DONE ? this.IN_PROGRESS : this.DONE;
        this.props.setNewState(newTask)
    };

    crossOut = () => {
        return this.props.task.status === this.DONE ? 'crossOut' : 'notCrossOut';
    };

    render(){
        return (
            <div className={'BoardTasks'}>
                <h5 className={this.crossOut()} onClick={this.changeTaskStatus}>{this.props.task.name}</h5>
                <div onClick={this.props.removeTask} className={'BoardTaskDeleteTask'}/>
            </div>
        )
    }
}
export default BoardTask;