import React, { Component } from 'react';
import axios from 'axios';
import { QuoteReviews } from './Quotes';

class QuoteReviewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/quoteReviews')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.quoteReviewArray,
                });
            })
            .catch((error) => {
                console.log('error hitting api', error);
            })
    }

    displayQuoteReviews() {
        const display = this.state.data.map((a, idx) => {
            return <QuoteReviews
                key={idx}
                name={a.name}
                review={a.review}
            />
        });
        console.log(this.state.data);
        return display;
    }

    render() {
        return (
            <div>
                {this.displayQuoteReviews()}
            </div>
        );
    }
}

export default QuoteReviewContainer;