import React, {Component} from 'react';
import './App.css';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strongBeatSound: '/sounds/Claves.wav',
      weekBeatSound: '/sounds/Rim_Shot.wav',
      bpm: 120,
      beatPerClick: 1,
      volume: 1.0,
    };

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  sound() {
    document.getElementById('sound-file').play()
  }

  play() {
    let intervalId = setInterval(() => {
      this.sound();
    }, 1000);

    this.setState({intervalId: intervalId})
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <h3>Metronome</h3>
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
