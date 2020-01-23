import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import formatData from './utils';
import './index.css';

const { Search } = Input;

export default class DatesList extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    thirdInput: '',
    fourthInput: '',
    fifthInput: '',
  };

  onSearchFirst = value => this.setState({ firstInput: formatData.formatFromString(value) });

  onSearchSecond = value => this.setState({ secondInput: formatData.formatFromStringToMonth(value) });

  onSearchThird = value => this.setState({ thirdInput: formatData.formatStartsFromYear(value) });

  onSearchForth = value => this.setState({ fourthInput: formatData.formatDateWithHyphen(value) });

  onSearchFifth = value => this.setState({ fifthInput: formatData.formatDateFromHyphen(value).fromNow() });

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
              onSearch={this.onSearchFirst}
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.firstInput}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example: 31102011
          </Col>
          <Col span={3}>Format: DDMMYYYY</Col>
          <Col span={6}>
            <Search
              onSearch={this.onSearchSecond}
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.secondInput}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example: 20130431, YYYYMMDD
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={this.onSearchThird}
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.thirdInput}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            {' '}
            Example: 20130430, YYYYMMDD, MM-DD-YYYY
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={this.onSearchForth}
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.fourthInput}</Col>
        </Row>

        <Row type="flex">
          <Col span={4} className="colfirst">
            Example:20130430, YYYYMMDD, MM-DD-YYYY
          </Col>
          <Col span={3}>Format: YYYYMMDD</Col>
          <Col span={6}>
            <Search
              onSearch={this.onSearchFifth}
              enterButton
            />
          </Col>
          <Col span={6}>Result: {this.state.fifthInput}</Col>
        </Row>
      </div>
    );
  }
}
