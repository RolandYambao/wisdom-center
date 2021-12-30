import React, { Component } from "react";
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-info">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Wisdom Center
                            </h1>
                            <h2 class="subtitle">
                                The Place to Find Higher Knowledge
                            </h2>
                        </div>
                    </div>
                    <div class="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a href="/about">
                                    <span>About</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2">
                                <a href="/quotes">
                                    <span>Quotes</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a href="/store">
                                    <span>Store</span>
                                </a>
                            </li>
                            <li data-target="pane-4" id="4">
                                <a href="/contact">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane is-active" id="pane-2">
                            <div class="content">
                                <h1>Knowledge from All Ages</h1>
                                <p>Here in the Wisdom Center, you will find the necessary knowledge in simple quotes that will satiate your curiosity of existence, in the center you will find:</p>
                                <ul>
                                    <li>Famous Quotes</li>
                                    <li>Inspirational Quotes</li>
                                    <li>Amusing Quotes</li>
                                    <li>Disturbing Quotes</li>
                                </ul>

                                <p>Click on the "About" tab to learn more about the Wisdom Center and its mission for the world.</p>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        );
    }
}

export default Homepage;