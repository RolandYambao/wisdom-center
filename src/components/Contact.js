import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                {/* <!-- START NAV --> */}
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                                <img src="../images/bulma.png" alt="Logo" />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">Home</a>
                                <a class="navbar-item">Examples</a>
                                <a class="navbar-item">Features</a>
                                <a class="navbar-item">Team</a>
                                <a class="navbar-item">Archives</a>
                                <a class="navbar-item">Help</a>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">Account</a>
                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">Dashboard</a>
                                        <a class="navbar-item">Profile</a>
                                        <a class="navbar-item">Settings</a>
                                        <hr class="navbar-divider" />
                                        <div class="navbar-item">Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}
                <section class="hero is-fullheight">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="columns is-8 is-variable ">
                                <div class="column is-two-thirds has-text-left">
                                    <h1 class="title is-1">Contact Us</h1>
                                    <p class="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
                                        voluptate facere molestiae consequatur.</p>
                                    <div class="social-media">
                                        <a href="https://facebook.com" target="_blank" class="button is-light is-large"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                                        <a href="https://instagram.com" target="_blank" class="button is-light is-large"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="https://twitter.com" target="_blank" class="button is-light is-large"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="column is-one-third has-text-left">
                                    <div class="field">
                                        <label class="label">Name</label>
                                        <div class="control">
                                            <input class="input is-medium" type="text" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input is-medium" type="text" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Message</label>
                                        <div class="control">
                                            <textarea class="textarea is-medium"></textarea>
                                        </div>
                                    </div>
                                    <div class="control">
                                        <button type="submit" class="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
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

export default Contact;
