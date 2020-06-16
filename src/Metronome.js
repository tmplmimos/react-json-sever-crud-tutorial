import React, {Component} from 'react';
import './App.css';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strongBeatSound: '/sounds/Claves.wav',
      weekBeatSound: '/sounds/Claves-low.wav',
      bpm: 100,
      beatPerClick: 1,
      beatPerMeasure: 4,
      volume: 1.0,
      clickCount: 0,
    };

    this.sound = this.sound.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.setBpm = this.setBpm.bind(this);
  }

  sound() {
    if(this.state.clickCount % this.state.beatPerMeasure === 0) {
      document.getElementById('sound-file-strong').play()
    } else {
      document.getElementById('sound-file-week').play()
    }
  }

  play() {
    let intervalId = setInterval(() => {
      this.sound();
      this.setState({clickCount: this.state.clickCount + 1})
    }, 60000 / this.state.bpm);

    this.setState({intervalId: intervalId})
  }

  stop() {
    this.setState({clickCount: 0});
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
        <audio id="sound-file-strong" preload="auto">
          <source src={this.state.strongBeatSound} type="audio/wav"/>
        </audio>
        <audio id="sound-file-week" preload="auto">
          <source src={this.state.weekBeatSound} type="audio/wav"/>
        </audio>
      </div>
    )
  }
}

export default Metronome;
