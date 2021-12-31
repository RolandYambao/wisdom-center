import React, { Component } from 'react';
import axios from 'axios';
import Store from './Store';

class StoreReviewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/storeReviews')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.storeReviewArray,
                });
            })
            .catch((error) => {
                console.log('error hitting api', error);
            })
    }

    displayStoreReviews() {
        const display = this.state.data.map((a, idx) => {
            return <Store
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
                {this.displayStoreReviews()}
            </div>
        );
    }
}

export default StoreReviewContainer;