import React, { Component } from "react";
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-1 ">About the Wisdom Center</h1>
                            <h2 className="subtitle">The Center Brings Truth and Understanding to All</h2>
                        </div>
                    </div>
                </section>
                <section id="parallax-1" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Mission and Vision</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">To bring wisdom to the world through the sharing of wise quotes from great figures.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="parallax-2" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6">
                                    <h1 className="title is-1 ">See the Truth of the World</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">The words of the wise will always guide the ignorant.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="parallax-3" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Building a Better Future</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">Our words shall inspire untold millions to see the brightness of life.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bottomSection" className="cta va">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                                <h1 className="title is-1 ">Subscribe to the Wisdom Center</h1>
                                <hr className="content-divider" />
                                <h2 className="subtitle">Our weekly updates shall bring more knowledge to all.</h2>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" placeholder="Jon Snow" />
                                    </div>
                                </div>
                                <br />
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="email" placeholder="jon@winterfell.com" />
                                    </div>
                                </div>
                                <br />
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-white is-rounded is-outlined">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Wisdom Center</strong> See our Wisdom
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default About;
