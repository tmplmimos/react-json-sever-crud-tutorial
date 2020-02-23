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

    render() {
        return (
            <div className="App">
                <div className="taxks">
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
