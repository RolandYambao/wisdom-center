import React, { Component } from 'react';
import axios from 'axios';
import Quotes from './Quotes';

class QuoteContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/wise-quotes')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.quoteArray,
                });
            })
            .catch((error) => {
                console.log('error hitting api', error);
            })
    }

    displayQuotes() {
        const display = this.state.data.map((a, idx) => {
            return <Quotes
                key={idx}
                name={a.name}
                origin={a.origin}
                quote={a.quote}
            />
        });
        console.log(this.state.data);
        return display;
    }

    render() {
        return (
            <div>
                {this.displayQuotes()}
            </div>
        );
    }
}

export default QuoteContainer;