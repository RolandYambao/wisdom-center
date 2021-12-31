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
import { Quotes, QuoteReviews } from "./components/Quotes";
import Contact from "./components/Contact";
import StoreReviewContainer from "./components/StoreReviewContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="/quotes">
              <Quotes />
              <QuoteReviews />
            </Route> */}

            <Route path="/store" element={<StoreReviewContainer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
