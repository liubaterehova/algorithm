import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import converter from './utils';
import './index.css';

export default class Converter extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    resFirstInput: '', // TODO: What is res ?
    resSecondInput: '', // TODO: What is res ?
  };

  handleClickFirstInput = () => {
    if (!this.state.firstInput) return; // Please, move to a new line after any statement

    this.setState(prevState => ({
      resFirstInput: converter.convertFrom2To10(prevState.firstInput),
    }));
  }

  handleClickSecInput = () => {
    if (!this.state.secondInput) return; // TODO: Please, move to a new line after any statement
    this.setState(prevState => ({
      resSecondInput: converter.convertFrom10To2(prevState.secondInput),
    }));
  }

  handleOnChangeFirstInput = ({ target: { value } }) => {
    this.setState({ firstInput: value });
  }

  handleOnChangeSecInput = ({ target: { value } }) => {
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
          <Input placeholder="answer" value={this.state.resFirstInput}>
            {' '}
          </Input>
        </div>
        <div>
          <Input
            placeholder="enter number"
            onChange={this.handleOnChangeSecInput}
          >
            {' '}
          </Input>
          <Button color="primary" variant="outlined" onClick={this.handleClickSecInput}>
            {' '}
            FROM 10 TO 2
          </Button>
          <Input placeholder="answer" value={this.state.resSecondInput}>
            {' '}
          </Input>
        </div>
      </div>
    );
  }
}
