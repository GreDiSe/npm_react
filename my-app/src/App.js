import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {screen: this.startScreen, boards: []};
    }
    closeBoard = index =>{
        this.setState(prevState => {
            const newBoard = prevState.boards.concat();
            newBoard.splice(index, 1);
            return {boards: newBoard};
        })
    };
    addToHeadBoard = () =>{
        const curText = this.refs.headerText.value;
        this.setState(prevState => {
            const newBoard = prevState.boards.concat();
            newBoard.push({name: curText, tasks: []});
            return {boards: newBoard};
        });
        this.refs.headerText.value = '';
    };
    renderHeaderBoard = () => {
        return this.state.boards.map((cur, i) => {
            return <div key={i} className={'createdBoard'}>
                <span onClick={() => this.closeBoard(i)} className={'createCloseButton'}/>
                {cur.name}
                </div>
        })
    };
    startScreen = () => {
        return <div className={'container'}>
            <div>
                <button
                    onClick={() => this.choseScreen(this.creatingBoardScreen)}
                    className={'startBoard'}>Create new board</button>
            </div>
            {this.renderHeaderBoard()}
        </div>
    };
    creatingBoardScreen = () =>{
        return <div className={'container'}>
            <div className={'startBoard creatingBoard'}>
                <h3>Creating board</h3>
                <p>What shall we call the board?</p>
                <input ref={'headerText'} type={'text'} />
                <div>
                    <button onClick={() => this.choseScreen(this.startScreen)}>Cancel</button>
                    <button onClick={this.addToHeadBoard}>Create</button>
                </div>
            </div>
            {this.renderHeaderBoard()}
        </div>
    };
    choseScreen = screen => {
        this.setState(() => {
            return {screen: screen}
        })
    };
    render(){
        return this.state.screen();
    }

}

export default App;
