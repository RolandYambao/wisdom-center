import React, { Component } from "react";
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar is-info">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start is-link">
                            <a class="navbar-item" href="https://github.com/BulmaTemplates/bulma-templates">
                                Home
                            </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link" href="/documentation/overview/start/">
                                    Docs
                                </a>
                                <div class="navbar-dropdown is-boxed">
                                    <a class="navbar-item" href="admin.html">
                                        Admin
                                    </a>
                                    <a class="navbar-item" href="forum.html">
                                        Forum
                                    </a>
                                    <a class="navbar-item" href="cover.html">
                                        Cover
                                    </a>
                                    <a class="navbar-item" href="cards.html">
                                        Cards
                                    </a>
                                    <a class="navbar-item" href="blog.html">
                                        Blog
                                    </a>
                                    <hr class="navbar-divider" />
                                    <a class="navbar-item" href="search.html">
                                        Search
                                    </a>
                                    <a class="navbar-item is-active" href="kanban.html">
                                        Kanban
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="field is-grouped">
                                    <p class="control">
                                        <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates">
                                            <span class="icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                            <span>
                                                Tweet
                                            </span>
                                        </a>
                                    </p>
                                    <p class="control">
                                        <a class="button is-primary" href="https://github.com/BulmaTemplates/bulma-templates">
                                            <span class="icon">
                                                <i class="fas fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-info">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Tabs
                            </h1>
                            <h2 class="subtitle">
                                example
                            </h2>
                        </div>
                    </div>
                    <div class="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a>
                                    <span class="icon is-small"><i class="fa fa-image"></i></span>
                                    <span>About</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2">
                                <a>
                                    <span class="icon is-small"><i class="fab fa-empire"></i></span>
                                    <span>Quotes</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a>
                                    <span class="icon is-small"><i class="fab fa-superpowers"></i></span>
                                    <span>Store</span>
                                </a>
                            </li>
                            <li data-target="pane-4" id="4">
                                <a>
                                    <span class="icon is-small"><i class="fa fa-film"></i></span>
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane" id="pane-1">
                            <figure>
                                <img src="https://source.unsplash.com/0_xMuEbpFAQ/400x400" alt="💯" class="cent" />
                            </figure>
                            <figure>
                                <img src="https://source.unsplash.com/wPMvPMD9KBI/800x600" alt="💯" class="cent" />
                            </figure>
                        </div>
                        <div class="tab-pane" id="pane-3">
                            <div class="columns">
                                <div class="container">
                                    <div class="columns">
                                        <div class="column">
                                            <article class="media">
                                                <div class="media-left">
                                                    <i class="fab fa-github-square fa-4x"></i>
                                                </div>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>Dominic Ipsum</strong>
                                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="media">
                                                <div class="media-left">
                                                    <i class="fab fa-empire fa-4x"></i>
                                                </div>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>Cassie Ipsum</strong>
                                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div class="column">
                                            <article class="media">
                                                <div class="media-left">
                                                    <i class="fab fa-ravelry fa-4x"></i>
                                                </div>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>Avery Ipsum</strong>
                                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="media">
                                                <div class="media-left">
                                                    <i class="fab fa-github-alt fa-4x"></i>
                                                </div>
                                                <div class="media-content">
                                                    <div class="content">
                                                        <p>
                                                            <strong>io Ipsum</strong>
                                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. ╳
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="pane-4">
                            <div class="columns is-centered">
                                <div class="column is-three-quarters">
                                    <div class="embed-container image">
                                        <iframe src="https://player.vimeo.com/video/261794608" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane is-active" id="pane-2">
                            <div class="content">
                                <h1>Hello World</h1>
                                <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                                <h2>Second level</h2>
                                <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                                <ul>
                                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                    <li>Ut non enim metus.</li>
                                </ul>

                                <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;