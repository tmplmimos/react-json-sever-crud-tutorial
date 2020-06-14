import React, {Component} from 'react';
import './App.css';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strongBeatSound: '/sounds/Claves.wav',
      weekBeatSound: '/sounds/Rim_Shot.wav',
      bpm: 100,
      beatPerClick: 1,
      volume: 1.0,
    };

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.setBpm = this.setBpm.bind(this);
  }

  sound() {
    document.getElementById('sound-file').play()
  }

  play() {
    let intervalId = setInterval(() => {
      this.sound();
    }, 60000 / this.state.bpm);

    this.setState({intervalId: intervalId})
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  setBpm(event) {
    this.setState({bpm: event.target.value});
  }

  render() {
    return (
      <div>
        <h3>Metronome</h3>
        <input type="number" onChange={this.setBpm} value={this.state.bpm}/>
        <button onClick={this.play}>start</button>
        <button onClick={this.stop}>stop</button>
        <audio id="sound-file" preload="auto">
          <source src={this.state.strongBeatSound} type="audio/wav"/>
        </audio>
      </div>
    )
  }
}

export default Metronome;
