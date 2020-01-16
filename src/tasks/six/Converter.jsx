import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import converter from './func';
import './index.css';

export default class Converter extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    resFirst: '',
    resSecond: '',
  };
  handleOnClick = () => {
    if (!this.state.firstInput) return;
    this.setState(prevState => ({
      resFirst: converter.convertFrom2To10(prevState.firstInput),
    }));
  }
  handleOnClickSec = () => {
    if (!this.state.secondInput) return;
    this.setState(prevState => ({
      resSecond: converter.convertFrom10To2(prevState.secondInput),
    }));
  }
  handleOnChange = ({ target: { value } }) => {
    this.setState({ firstInput: value });
  }
  handleOnChangeSec = ({ target: { value } }) => {
    this.setState({ secondInput: value });
  }
  render() {
    return (
      <div>
        <div>
          <Input
            placeholder="enter number"
            onChange={this.handleOnChange}
          >
            {' '}
          </Input>
          <Button
            className="button"
            color="primary"
            variant="outlined"
            onClick={this.handleOnClick}
          >
            {' '}
            FROM 2 TO 10
          </Button>
          <Input placeholder="answer" value={this.state.resFirst}>
            {' '}
          </Input>
        </div>
        <div>
          <Input
            placeholder="enter number"
            onChange={this.handleOnChangeSec}
          >
            {' '}
          </Input>
          <Button color="primary" variant="outlined" onClick={this.handleOnClickSec}>
            {' '}
            FROM 10 TO 2
          </Button>
          <Input placeholder="answer" value={this.state.resSecond}>
            {' '}
          </Input>
        </div>
      </div>
    );
  }
}
