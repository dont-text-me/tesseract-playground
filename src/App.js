import beeMovie from './text.jpg';
import './App.css';
import Tesseract from 'tesseract.js';

function App() {
  //Tesseract.recognize(beeMovie, 'eng').then((text) => console.log(text.data.lines[0]))
  return (
    <div className="App">
        <img src={beeMovie} />
    </div>
  );
}

export default App;
