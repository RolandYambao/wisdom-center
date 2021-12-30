import React, { Component } from "react";
import './Quotes.css';

class Quotes extends Component {

    constructor(props) {
        super(props);
    }

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
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <article className="notification media has-background-white">
                                        <figure className="media-left">
                                            <span className="icon">
                                                <i className="has-text-warning fas fa-columns fa-lg"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">John</h1>
                                                <p className="is-size-5 subtitle">
                                                    "I have been enlightened by great masters."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-info">
                                                <i className="fab fa-lg fa-wpforms"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Bob</h1>
                                                <p className="is-size-5 subtitle">
                                                    "I have seen truth beyond my understanding."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cubes"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Jenny</h1>
                                                <p className="is-size-5 subtitle">
                                                    "My life has been completely transformed."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-grey">
                                                <i className="fas fa-lg fa-cogs"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Unknown</h1>
                                                <p className="is-size-5 subtitle">
                                                    $!Q^&#^#!%#!@#01001000011001010110110001110000
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-lg fa-warehouse"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">$!@#@#*</h1>
                                                <p className="is-size-5 subtitle">
                                                01001011011010010110110001101100001000000110110101100101$!@%#%Fq
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cube"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Rob</h1>
                                                <p className="is-size-5 subtitle">
                                                    "I am estatic for the greatness I am witnessing."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                </footer>
            </div>
        );
    }
}

export default Quotes;
