import React, { Component } from "react";
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
import { QuoteDisplay, QuoteReviewDisplay } from "./components/QuoteDisplay";
import Contact from "./components/Contact";
import Store from "./components/Store";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/quotes" render={props =>
              <div>
                <QuoteDisplay />
                <QuoteReviewDisplay />
              </div>
            } /> */}
            <Route path="/quotes" element={<QuoteDisplay />} />
            <Route path="/quotes" element={<QuoteReviewDisplay />} />

            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router >
    );
  }
}

export default App;
