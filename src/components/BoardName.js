import React, { Component } from 'react';
import '../css/BoardName.css';

class BoardName extends Component {
    constructor(props){
        super(props);
        this.DONE = 1;
        this.IN_PROGRESS = 0;
    }

    addTaskName = () => {
        const name = this.refs.lineTaskName.value;
        this.refs.lineTaskName.value = '';
        this.props.board.tasks.push({name: name, status: this.IN_PROGRESS});
        this.props.setNewState(this.props.board.tasks);
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
export default BoardName;
