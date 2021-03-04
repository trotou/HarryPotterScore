import "./App.css";
import Students from "./components/Students";
import Houses from "./components/Houses";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar />
        <Houses />
        <Students />
      </header>
    </div>
  );
}

export default App;
