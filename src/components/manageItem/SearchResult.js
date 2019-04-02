import React, { Component } from 'react';
import Result from './Result.js';

export default class SearchResults extends Component {
    state = {

    };
    render() {
        return (
            <div className="results">
            {/* console.log({this.props.result}) */}
                {this.props.result.map((product) => <Result product={product} key={product.id} changeProduct={this.props.changeProduct} />)}
            </div>
        );
    }
}