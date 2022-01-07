import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <MainPage />
    </div>
  );
}

export default App;
