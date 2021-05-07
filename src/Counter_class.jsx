import { render } from '@testing-library/react';
import React from 'react';

class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0
        };

        this.onPlus = this. onPlus.bind(this);
        this.onMinus = this.onMinus.bind(this);
    }



    onPlus() {
        this.setState(state => {
            return {count : state.count +1 };
        });

    }

    onMinus() {
        this.setState(state => {
            return {count : state.count -1 };
        });
    }

    render() {
        return (
            <div>
                <h1>React Classes</h1>
                <strong>{this.state.count}</strong>
                <button onClick={this.onPlus}>+</button>
                <button onClick={this.onMinus}>-</button>
            </div>
        )
    }

}

export default CounterClass;