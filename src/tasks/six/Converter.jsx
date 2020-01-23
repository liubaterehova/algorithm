import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import converter from './utils';
import './index.css';

export default class Converter extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    resultofFirstInput: '',
    resultofSecondInput: '',
  };

  handleClickFirstInput = () => {
    if (!this.state.firstInput) return;

    this.setState(prevState => ({
      resultofFirstInput: converter.convertFromBinaryToDecimal(prevState.firstInput),
    }));
  }

  handleClickSecondInput = () => {
    if (!this.state.secondInput) return;

    this.setState(prevState => ({
      resultofSecondInput: converter.convertFromDecimalToBinary(prevState.secondInput),
    }));
  }

  handleOnChangeFirstInput = ({ target: { value } }) => {
    this.setState({ firstInput: value });
  }

  handleOnChangeSecondInput = ({ target: { value } }) => {
    this.setState({ secondInput: value });
  }

  render() {
    return (
      <div>
        <div>
          <Input
            placeholder="enter number"
            onChange={this.handleOnChangeFirstInput}
          >
            {' '}
          </Input>
          <Button
            className="button"
            color="primary"
            variant="outlined"
            onClick={this.handleClickFirstInput}
          >
            {' '}
            FROM 2 TO 10
          </Button>
          <Input placeholder="answer" value={this.state.resultofFirstInput}>
            {' '}
          </Input>
        </div>
        <div>
          <Input
            placeholder="enter number"
            onChange={this.handleOnChangeSecondInput}
          >
            {' '}
          </Input>
          <Button color="primary" variant="outlined" onClick={this.handleClickSecondInput}>
            {' '}
            FROM 10 TO 2
          </Button>
          <Input placeholder="answer" value={this.state.resultofSecondInput}>
            {' '}
          </Input>
        </div>
      </div>
    );
  }
}
