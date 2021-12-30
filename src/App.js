import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

// Components
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Quotes from "./components/Quotes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
