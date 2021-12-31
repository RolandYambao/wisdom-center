import React, { Component } from "react";
import './Store.css';

class StoreReviews extends Component {

    render() {
        return (
            <article className="notification media has-background-white">
                <figure className="media-left">
                    <span className="icon">
                        <i className="has-text-warning fa fa-columns fa-lg"></i>
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

export default StoreReviews;
