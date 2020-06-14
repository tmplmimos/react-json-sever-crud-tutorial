import React, {Component} from 'react';
import './App.css';

class Metronome extends Component {
  play = () => (
    document.getElementById('sound-file').play()
  )

  render() {
    return (
      <div>
        <h3>Metronome</h3>
        <button onClick={this.play}>submit</button>
        <audio id="sound-file" preload="auto">
          <source src="/sounds/Claves.wav" type="audio/wav"/>
        </audio>
      </div>
    )
  }
}

export default Metronome;
