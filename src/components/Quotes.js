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
                                    <div className="box" key={0}>
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
                                    <div className="box" key={1}>
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
                                    <div className="box" key={2}>
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
                                    <div className="box" key={3}>
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
                                    <div className="box" key={4}>
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
            </div>
        );
    }
}

class QuoteReviews extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                                        <div className="media-content" key={0}>
                                            <div className="content">
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
                                            <div className="content" key={1}>
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
                                            <div className="content" key={2}>
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
                                            <div className="content" key={3}>
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
                                            <div className="content" key={4}>
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
                                            <div className="content" key={5}>
                                                <h1 className="title is-size-4">{this.props.name}</h1>
                                                <p className="is-size-5 subtitle">
                                                    {this.props.review}
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
            </div >
        );
    }
}

export {
    Quotes,
    QuoteReviews,
}
