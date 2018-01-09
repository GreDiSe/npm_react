import React, { Component } from 'react';
import '../css/BoardAdd.css';

class BoardAdd extends Component {
    constructor(props){
        super(props);
    }

    addBoardName = () => {
        const name = this.refs.lineName.value;
        this.refs.lineName.value = '';
        this.props.setNewState(() => {
            this.props.boards.push({name: name, tasks: []})
            return {boards: this.props.boards}
        })
    };

    render(){
        return(
            <div className={'boardAdd'}>
                <h3>Add board</h3>
                <input
                    ref={'lineName'}
                    type={'text'}
                    placeholder={'Enter here...'}
                />
                <button onClick={this.addBoardName}>OK</button>
            </div>
        )
    }

}
export default BoardAdd;
