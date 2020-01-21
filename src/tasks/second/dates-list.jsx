import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

import formatData from './utils';
import './index.css';

const { Search } = Input;

export default class DatesList extends Component {
  // TODO: names...
  state = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
  };

  onSearchFirst = value => this.setState({ first: formatData.formatFromString(value) });

  onSearchSecond = value => this.setState({ second: formatData.formatFromStringToMonth(value) });

  onSearchThird = value => this.setState({ third: formatData.formatStartsFromYear(value) });

  onSearchForth = value => this.setState({ fourth: formatData.formatDateWithHyphen(value) });

  onSearchFifth = value => this.setState({ fifth: formatData.formatDateFromHyphen(value).fromNow() });

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
          <Col span={6}>Result: {this.state.first}</Col>
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
          <Col span={6}>Result: {this.state.second}</Col>
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
          <Col span={6}>Result: {this.state.third}</Col>
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
          <Col span={6}>Result: {this.state.fourth}</Col>
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
          <Col span={6}>Result: {this.state.fifth}</Col>
        </Row>
      </div>
    );
  }
}
