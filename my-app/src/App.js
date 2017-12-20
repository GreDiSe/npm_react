import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.DONE = 0;
        this.IN_PROGRESS = 1;
        this.state = {tasks: []};
        this.defaultTaskStatus = { status: this.IN_PROGRESS};
    };
    addTask = () => {
        this.setState(prevState => {
            const text = this.refs.task.value;
            this.refs.task.value = '';
            return {tasks: [...prevState.tasks, {name: text, ...this.defaultTaskStatus}]}
        });
    };
    selectAllEl = () =>{
        this.setState(prevState => {
            const newState = prevState.tasks.map(cur => {
                cur.status = this.DONE;
                return cur;
            });
            return {tasks: newState};
        })
    };
    deleteSelected = () => {
        this.setState(prevState =>{
            for(let i = 0; i < prevState.tasks.length; i++){
                if(prevState.tasks[i].status === this.DONE) {
                    prevState.tasks.splice(i, 1);
                    i--;
                }
            }
            return {tasks: prevState.tasks}
        });
    };

    deleteTask = index => {
        this.setState(prevState =>{
            prevState.tasks.splice(index, 1);
            return {tasks: prevState.tasks}
        });
    };
    checked = index => {
        this.setState(prevState => {
            prevState.tasks[index].status = prevState.tasks[index].status === this.DONE ? this.IN_PROGRESS : this.DONE;
            return {tasks: prevState.tasks};
        });
        console.log(this.state.tasks)
    };
    renderTasks = () =>{
        let count = 0;

        return this.state.tasks.map((cur, i) => {
            this.refs.count.innerHTML = 'Количество: ' + count;
            const className = cur.status === this.DONE ? 'cross' : 'notCross';

            if(this.refs.done.checked && cur.status !== this.DONE) return;
            else if(this.refs.notDone.checked && cur.status !== this.IN_PROGRESS) return;

            const out = <tr>
                <td>
                    <input
                        checked={cur.status === this.DONE}
                        onChange={() => this.checked(i)}
                        className={'check'}
                        type={'checkbox'}
                    />
                    <h5 className={className}>{cur.name}</h5>
                </td>
                <td><button
                    className={'buttonDelete'}
                    onClick={() => this.deleteTask(i)}
                /></td>
            </tr>;
            count++;
            this.refs.count.innerHTML = 'Количество: ' + count;
            return out;
        });
    };
    showTasks = (id) => {
        /*id = 0 - all
        id = 1 - done
        id = 2 - notDone*/

        this.setState(prevState => {
            const newState = prevState.tasks.map(cur => {
                if(id === 0){
                    this.refs.done.checked = false;
                    this.refs.notDone.checked = false;
                }
                else if(id === 1){
                    this.refs.all.checked = false;
                    this.refs.notDone.checked = false;
                }
                else if(id === 2){
                    this.refs.done.checked = false;
                    this.refs.all.checked = false;
                }
                return cur;
            });
            return {tasks: newState};
        });
    };

    render() {
        return <div>
            <table >
                <tbody>
                <tr className={'addTask'}>
                    <td>
                        <input
                            ref='task'
                            className={"inputText"}
                            type={"text"}
                            placeholder={"Напиши что-то"}
                        />
                    </td>
                    <td>
                        <button className={'buttonAdd'} onClick={this.addTask}>Добавить</button>
                    </td>
                </tr>
                {this.renderTasks()}
                </tbody>
            </table>
            <table>
                <tbody>
                <td><button onClick={this.selectAllEl}>Выделить все</button></td>
                <td><button onClick={this.deleteSelected}>Удалить выделенные</button></td>
                </tbody>
            </table>
            <table className={'info'}>
                <tbody>
                <tr>
                    <td ref='count'>Количество: {this.state.tasks.length}</td>
                    <td><input
                        ref='all'
                        defaultChecked={true}
                        onChange={() => this.showTasks(0)}
                        type={'radio'}
                    />Все</td>
                    <td><input
                        ref='done'
                        onChange={() => this.showTasks(1)}
                        type={'radio'}
                    />Сделаные</td>
                    <td><input
                        ref='notDone'
                        onChange={() => this.showTasks(2)}
                        type={'radio'}
                    />Не сделаные</td>
                </tr>
                </tbody>
            </table>
        </div>
    };
}

export default App;
