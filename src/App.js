import ufo from './UFO.png';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header
        className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white"
        style={{ fontSize: 'calc(10px + 2vmin)' }}
      >
        <img src={ufo} className="team-logo" alt="team-logo" />

        <h1 className="text-3xl font-bold underline">TEAM POKEMON TRAINERS</h1>
        <p> We are going to build something amazing with React!</p>
        <a
          className="text-blue-300 underline hover:text-blue-900"
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
