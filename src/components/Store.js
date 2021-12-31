import React, { Component } from "react";
import './Store.css';
import StoreReviewContainer from './StoreReviewContainer';

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
                            <StoreReviewContainer />
                        </div>
                    </section>
                </footer>
            </div>
        );
    }
}

export default Store;
