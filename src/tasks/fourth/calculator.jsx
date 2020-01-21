import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import calculator from './utils';
import 'typeface-roboto';

export default class Calculator extends Component {
  state = {
    inputValue: '',
    result: 'answer',
  };

  typeOfOperation = value => {
    if (value.includes('+')) {
      return this.setState({ result: calculator.sum(value, '+') });
    }

    if (value.includes('-')) {
      this.setState({ result: calculator.minus(value, '-') });
    } else if (value.includes('/')) {
      this.setState({ result: calculator.divide(value, '/') });
    } else if (value.includes('*')) {
      this.setState({ result: calculator.multiply(value, '*') });
    // } else { this.setState({ result: 'mistake' }); } // TODO: please, don't write like that
    } else {
      this.setState({ result: 'mistake' });
    }

    return null;
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }

  handleOnClick = () => {
    const { inputValue } = this.state;

    // TODO: Why do you use this setState ?
    // this.setState({ inputValue: '' });
    this.typeOfOperation(inputValue);

    // eslint-disable-next-line no-eval
    // this.setState({ result: eval(inputValue) });
  }

  render() {
    const { inputValue, result } = this.state;

    return (
      <div>
        <Input
          variant="contained"
          placeholder="input expsion"
          color="primary"
          onChange={this.handleChange}
          value={inputValue}
          // value={this.state.inputValue} // TODO: Please, use destructurisation
        />
        <Button
          color="primary"
          onClick={this.handleOnClick}
        >
          COUNT
        </Button>
        {/* {this.state.result} TODO: */}
        {result}
      </div>
    );
  }
}
