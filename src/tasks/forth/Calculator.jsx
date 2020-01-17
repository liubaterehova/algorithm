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
    } else { this.setState({ result: 'mistake' }); }

    return null;
  };

  // TODO: handleChange - not handleOnChange
  handleOnChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }

  // TODO: Same
  // handleOnClick = () => {
  //   this.setState({ inputValue: '' });
  //   this.typeOfOperation(this.state.inputValue);
  // }

  hadneClick = () => {
    const { inputValue } = this.state;

    // eslint-disable-next-line no-eval
    this.setState({ result: eval(inputValue) });
  }

  render() {
    return (
      <div>
        <Input
          variant="contained"
          placeholder="input expsion"
          color="primary"
          onChange={this.handleOnChange}
          value={this.state.inputValue}
        />
        <Button
          color="primary"
          onClick={this.hadneClick}
        >
          COUNT
        </Button>
        {this.state.result}
      </div>
    );
  }
}
