import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import './my.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
    <main id='content'>
      <Welcome/>
    </main>
    </div>
  );
}

export default App;
