import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        count: 4
    };
    onIncrease = () => {
        this.setState(
            (oldSt) => ({count: oldSt.count + 1})
        );
    };
    onIncreaseminus = () => {
        this.setState(
            (oldSt) => ({count: oldSt.count - 1})
        );
    };
    onIncreasereset = () => {
        this.setState(
            () => ({count: 0})
        );
    };
    render() {
        return (
          <div>
            <p>{this.state.count}</p>
            <button onClick = {this.onIncrease}>plus</button>
            <button onClick = {this.onIncreaseminus}>minus</button>
            <button onClick = {this.onIncreasereset}>reset</button>
          </div>
        );
    };
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
