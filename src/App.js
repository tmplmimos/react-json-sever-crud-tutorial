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

    fetchTasks = () => {
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
        fetch('http://localhost:3001/tasks', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({body: this.state.inputText})
        })
            .then(this.fetchTasks)
    }

    componentWillMount() {
        this.fetchTasks()
    }

    putTask(taskId) {
        fetch('http://localhost:3001/tasks' + taskId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({body: 'done it !!'})
        })
            .then(this.fetchTasks)
    }

    deleteTask(taskId) {
        fetch('http://localhost:3001/tasks/' + taskId, {
            method: 'DELETE'
        })
            .then(this.fetchTasks)
    }

    render() {
        return (
            <div className="App">
                <div className="tasks">
                    {
                        this.state.tasks.map(task => {
                            return (
                                <div className="task" key={task.id}>
                                    {task.body}
                                    <button className="put" onClick={() => {
                                        this.putTask(task.id)
                                    }}>put
                                    </button>
                                    <button className="delete" onClick={() => {
                                        this.deleteTask(task.id)
                                    }}>delete
                                    </button>
                                </div>
                            )
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
