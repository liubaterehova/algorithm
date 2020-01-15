import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";
import converter from "./func";
import "./index.css";
export default class Converter extends Component {
  state = {
    firstInput: "",
    secondInput: "",
    resFirst: "",
    resSecond: ""
  };
  render() {
    return (
      <div>
        <div>
          <Input
            placeholder="enter number"
            onChange={e => {
              this.setState({ firstInput: e.target.value });
            }}
          >
            {" "}
          </Input>
          <Button
            className="button"
            color="primary"
            variant="outlined"
            onClick={() => {
              debugger;
              this.setState({
                resFirst: converter.convertFrom2To10(this.state.firstInput)
              });
            }}
          >
            {" "}
            FROM 2 TO 10
          </Button>
          <Input placeholder="answer" value={this.state.resFirst}>
            {" "}
          </Input>
        </div>
        <div>
          <Input
            placeholder="enter number"
            onChange={e => {
              this.setState({ secondInput: e.target.value });
            }}
          >
            {" "}
          </Input>
          <Button color="primary" variant="outlined">
            {" "}
            FROM 10 TO 2
          </Button>
          {this.state.resSecond}
        </div>
      </div>
    );
  }
}
