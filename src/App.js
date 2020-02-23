import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                {
                    id: 1,
                    body: 'とりま表示'
                },
                {
                    id: 2,
                    body: 'いまだけ...'
                }
            ]
        }
        this.changeText = this.changeText.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    fetchTasks() {
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(json => {
                this.setState({tasks: json})
            })
    }

    changeText(e) {
        const inputText = e.target.value
        this.setState({inputText: inputText})
        console.dir(inputText);
    }

    submitTask() {
        console.log(this.state.inputText);
    }

    componentWillMount() {
        this.fetchTasks()
    }

    render() {
        return (
            <div className="App">
                <div className="tasks">
                    {
                        this.state.tasks.map(task => {
                            return <div className="task" key={task.id}>{task.body}</div>
                        })
                    }
                </div>
                <div id="task-form">
                    <input type="text" id="task-input" onChange={this.changeText}/>
                    <button id="submit" onClick={this.submitTask}>submit</button>
                </div>
            </div>
        );
    }
}

export default App;
