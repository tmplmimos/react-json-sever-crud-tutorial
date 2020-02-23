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
    }

    fetchTasks(){
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(json => {
                this.setState({tasks: json})
            })
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
            </div>
        );
    }
}

export default App;
