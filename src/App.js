import { Router } from "@reach/router";
import { Home } from './Pages/Home'
import { Post } from './Pages/Post'
import { Header } from './Components/Header';
import { Navigation } from "./Components/Navigation";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="side-pane">
        <Navigation />
        <div className="main">
          <Router>
            <Home path="/" />
            <Post path="/posts/:id" />
          </Router>
        </div>
      </div>
    </div>
  );
}


export default App;
