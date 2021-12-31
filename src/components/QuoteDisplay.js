import React, { Component } from "react";
import './Quotes.css';
import QuoteContainer from "./QuoteContainer";
import QuoteReviewContainer from "./QuoteReviewContainer";

class QuoteDisplay extends Component {

    render() {
        return (
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="container content">
                                    <i className="is-large"></i>
                                    <h1 className="title">Wise Words of Wisdom</h1>
                                    <h3 className="subtitle">
                                        Enjoy our Main Content
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <div className="content is-medium">
                                    <h3 id="topQuotes" className="title is-3">Top Quotes</h3>
                                    <QuoteContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

class QuoteReviewDisplay extends Component {

    render() {
        return (
            <div>
                <footer className="footer">
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <QuoteReviewContainer />
                            </div>
                        </div>
                    </section>
                    <hr />
                </footer>
            </div >
        );
    }
}

export {
    QuoteDisplay,
    QuoteReviewDisplay,
}
