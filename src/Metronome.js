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
      volume: 0.8,
      clickCount: 0,
    };

    this.sound = this.sound.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.setBpm = this.setBpm.bind(this);
    this.changeTempo = this.changeTempo.bind(this);
  }

  changeTempo(event) {
    this.setState({volume: event.target.value});
    document.getElementById('sound-file-strong').volume = this.state.volume;
    document.getElementById('sound-file-week').volume = this.state.volume;
  }

  sound() {
    if(this.state.clickCount % this.state.beatPerMeasure === 0) {
      const soundFileStrong = document.getElementById('sound-file-strong');
      soundFileStrong.volume = this.state.volume;
      soundFileStrong.play()
    } else {
      const soundFileWeek = document.getElementById('sound-file-week');
      soundFileWeek.volume = this.state.volume;
      soundFileWeek.play()
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
        <input onChange={this.changeTempo} type="range" min="0" max="0.8" step="0.1"/>
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
