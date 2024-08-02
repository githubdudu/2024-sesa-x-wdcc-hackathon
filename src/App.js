import ufo from './UFO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ufo} className="team-logo" alt="team-logo" />
        <p>We are We ARE TEAM POKEMON TRAINS.</p>
        <p>We are going to build something amazing with React!</p>
        <a
          className="App-link"
          href="https://www.notion.so/dewey-dong/2024-SESA-x-WDCC-Hackathon-7351b114ef9d41d89896215db729428d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Notion Page
        </a>
      </header>
    </div>
  );
}

export default App;
