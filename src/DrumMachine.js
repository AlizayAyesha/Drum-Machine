import React, { useState } from 'react';
import './DrumMachine.css';

// Data for drum pads
const drumPads = [
  { id: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Heater 1' },
  { id: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', description: 'Heater 2' },
  { id: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', description: 'Heater 3' },
  { id: 'A', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3', description: 'Heater 4' },
  { id: 'S', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3', description: 'Clap' },
  { id: 'D', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3', description: 'Open-HH' },
  { id: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: 'Kick-n-Hat' },
  { id: 'X', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3', description: 'Kick' },
  { id: 'C', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3', description: 'Closed-HH' },
];

function DrumMachine() {
  const [display, setDisplay] = useState('Press a key or click a pad');

  const playSound = (id) => {
    const drumPad = drumPads.find(pad => pad.id === id);
    if (drumPad) {
      const audio = new Audio(drumPad.src);
      audio.play();
      setDisplay(drumPad.description);
    }
  };

  const handleClick = (id) => {
    playSound(id);
  };

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (drumPads.some(pad => pad.id === key)) {
      playSound(key);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pad-container">
        {drumPads.map(pad => (
          <div
            key={pad.id}
            className="drum-pad"
            id={pad.id}
            onClick={() => handleClick(pad.id)}
          >
            <div className="label">{pad.id}</div>
            <div className="description">{pad.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
