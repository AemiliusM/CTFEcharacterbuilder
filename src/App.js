import './App.css';
import { useState } from 'react';
import { Selector } from './Selection/selector';
import Character from './Character/character';
import CatchphraseDisplay from './CatchphraseDisplay/catchphrases';

function App() {
  const [head, setHead] = useState('guy');
  const [middle, setMiddle] = useState('nic');
  const [bottom, setBottom] = useState('lizard');
  const [catchphrases, setCatchphrase] = useState([]);
  const [newCatchphrase, setNewCatchphrase] = useState('');

  const handleClick = () => {
    setCatchphrase((prevState) => [...prevState, newCatchphrase]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Crafter</h1>
      </header>
      <Selector
        head={head}
        onHeadChange={setHead}
        middle={middle}
        onMiddleChange={setMiddle}
        bottom={setBottom}
        onBottomChange={setBottom}
        newCatchphrase={newCatchphrase}
        setNewCatchphrase={setNewCatchphrase}
        handleClick={handleClick}
      />
      <CatchphraseDisplay catchphrases={catchphrases} />
      <Character head={head} middle={middle} bottom={bottom} />
    </div>
  );
}

export default App;
