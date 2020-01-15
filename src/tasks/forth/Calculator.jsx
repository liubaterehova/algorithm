import React, { Component } from "react";
import calculator from "./func";
import "typeface-roboto";
import { Input, Button, Card } from "@material-ui/core";

export default class Calculator extends Component {
  state = {
    inputValue: "",
    res: "answer",
    click: "false"
  };

  render() {
    const typeOfOperation = value => {
      if (value.includes("+")) {
        return this.setState({ res: calculator.sum(value, "+") });
      } else if (value.includes("-")) {
        this.setState({ res: calculator.minus(value, "-") });
      } else if (value.includes("/")) {
        this.setState({ res: calculator.divide(value, "/") });
      } else if (value.includes("*")) {
        this.setState({ res: calculator.multiply(value, "*") });
      }
    };

    return (
      <div>
        <Input
          variant="contained"
          placeholder="input expression"
          color="primary"
          onChange={e => this.setState({ inputValue: e.target.value })}
          value={this.state.inputValue}
        ></Input>
        <Button
          color="primary"
          onClick={e => {
            this.setState({ inputValue: "" });
            return typeOfOperation(this.state.inputValue);
          }}
        >
          COUNT
        </Button>
        {this.state.res}
      </div>
    );
  }
}
