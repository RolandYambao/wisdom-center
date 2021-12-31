import React, { Component } from "react";
import './Quotes.css';

class Quotes extends Component {

    render() {
        return (
            <div>
                <div className="box">
                    <h4 id="const" className="title is-3">{this.props.name}</h4>
                    <article className="message is-primary">
                        <span className="icon has-text-primary">
                            <i className="fab fa-js"></i>
                        </span>
                        <div className="message-body">
                            {this.props.origin}
                        </div>
                    </article>
                    <pre><code className="language-javascript">{this.props.quote}</code></pre>
                </div>
            </div>
        );
    }
}

class QuoteReviews extends Component {

    render() {
        return (
            <article className="notification media has-background-white">
                <figure className="media-left">
                    <span className="icon">
                        <i className="has-text-warning fas fa-columns fa-lg"></i>
                    </span>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <h1 className="title is-size-4">{this.props.name}</h1>
                        <p className="is-size-5 subtitle">
                            {this.props.review}
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}

export {
    Quotes,
    QuoteReviews,
}
