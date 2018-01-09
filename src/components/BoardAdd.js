import React, { Component } from 'react';
import '../css/BoardAdd.css';

class BoardAdd extends Component {
    addBoardName = () => {
        const name = this.refs.lineName.value;
        const newBoard = this.props.boards.concat();
        this.refs.lineName.value = '';
        this.props.setNewState(() => {
            newBoard.push({name: name, tasks: []});
            return {boards: newBoard}
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
