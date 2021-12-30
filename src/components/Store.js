import React, { Component } from "react";
import './Store.css';

class Store extends Component {
    render() {
        return (
            <div>
                <section className="hero is-info is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">
                                Wise Bargain
                            </p>
                            <p className="subtitle">
                                Where knowledge can be bought
                            </p>
                        </div>
                    </div>
                </section>
                <div className="box cta">
                    <p id="latest" className="has-text-centered">
                        <span className="tag is-primary">New</span> See our latest words of wisdom.
                    </p>
                </div>
                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://i.imgur.com/aiQfNfF.jpeg" alt="Eye" className="modal-button" data-target="modal-image2" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Knowledge Bundle</h4>
                                        <p>Containing many books of quotes and posters of wise words.</p>
                                        <span className="button is-link modal-button" data-target="modal-image2">$100 Buy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://i.imgur.com/nNCxIAL.jpeg" alt="Throne" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Majestic Bundle</h4>
                                        <p>Videos, Books, and Clothing of Wisdom is available for all who purchase this mighty bundle.</p>
                                        <span className="button is-link modal-button" data-target="modal-card">$500 Buy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 modal-button" data-target="modal-image">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://i.imgur.com/p49Y6Yp.jpeg" alt="Light" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Divine Bundle</h4>
                                        <p>See the light itself and unlock the secrets of the universe with this heavenly gift.</p>
                                        <span className="button is-link modal-button" data-target="modal-image">$1000 Buy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <article className="notification media has-background-white">
                                        <figure className="media-left">
                                            <span className="icon">
                                                <i className="has-text-warning fa fa-columns fa-lg"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #1</h1>
                                                <p className="is-size-5 subtitle">
                                                    "The Greatest thing I have ever bought."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-info">
                                                <i className="fa fa-lg fa-wpforms"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #2</h1>
                                                <p className="is-size-5 subtitle">
                                                    "I am awestruck by this wisdom."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fa fa-lg fa-cubes"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #3</h1>
                                                <p className="is-size-5 subtitle">
                                                    "My life has never been better."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-grey">
                                                <i className="fa fa-lg fa-cogs"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #4</h1>
                                                <p className="is-size-5 subtitle">
                                                    "Someone please help me."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-primary">
                                                <i className="fa fa-lg fa-superpowers"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #5</h1>
                                                <p className="is-size-5 subtitle">
                                                    "Get me out of here, someone help."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fa fa-lg fa-cube"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Review #6</h1>
                                                <p className="is-size-5 subtitle">
                                                    "The greates tuse of my hard earned money."
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        );
    }
}

export default Store;
