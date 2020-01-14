import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import FormatData from "./func";
import "./index.css";
import { Row, Col, Input } from "antd";
const { Search } = Input;

export default class Data extends Component {
  state = {
    first: "",
    second: "",
    third: "",
    forth: "",
    fifth: ""
  };
  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={4} className="colfirst">
            Example: 31102011
          </Col>
          <Col span={3}>Format: DDMMYYYY</Col>
          <Col span={6}>
            <Search
              onSearch={value =>
                this.setState({ first: FormatData.formatFromString(value) })
              }
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.first}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example: 31102011
          </Col>
          <Col span={3}>Format: DDMMYYYY</Col>
          <Col span={6}>
            <Search
              onSearch={value =>
                this.setState({
                  second: FormatData.formatFromStringToMonth(value)
                })
              }
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.second}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example: 20130431, YYYYMMDD
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={value =>
                this.setState({ third: FormatData.formatInExample(value) })
              }
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.third}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            {" "}
            Example: 20130430, YYYYMMDD, MM-DD-YYYY
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={value =>
                this.setState({ forth: FormatData.formatWithHyphen(value) })
              }
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.forth}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example:20130430, YYYYMMDD, MM-DD-YYYY
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={value =>
                this.setState({
                  fifth: FormatData.formatDateFromHyphen(value).fromNow()
                })
              }
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.fifth}</Col>
        </Row>
      </div>
    );
  }
}
