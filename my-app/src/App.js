import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.boards = [];
        this.state = {status: this.START_BOARD}

        this.START_BOARD = 0;
        this.CREATE_BOARD = 1;
    }

    startScreen = () => {
        return <div onClick={() => this.choseScreen(this.CREATE_BOARD)}>
            <button className={'startBoard'}>Create new board</button>
        </div>
    };
    creatingBoardScreen = () =>{
        return <div className={'startBoard creatingBoard'}>
            <h3>Creating board</h3>
            <p>What shall we call the board?</p>
            <input type={'text'} />
            <div>
                <button>Cancel</button>
                <button>Create</button>
            </div>
        </div>
    };
    choseScreen = screen => {
        this.setState(() => {
            return {status: screen}
        })
    };
    render(){
        if(this.state.status === this.START_BOARD) return this.startScreen();
        else if(this.state.status === this.CREATE_BOARD) return this.creatingBoardScreen();
    }

}

export default App;
