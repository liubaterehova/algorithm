import React, { Component } from 'react';
import {
  Menu, Dropdown, Input, Row, Col,
} from 'antd';
import { allCheck, TYPE_FORMATS } from './utils';

const { TextArea } = Input;

function formatToName(key) {
  switch (key) {
    case TYPE_FORMATS.NONE:
      return 'переносов нет';
    case TYPE_FORMATS.SYMBOL:
      return 'перенос по символу';
    case TYPE_FORMATS.SENTENCE:
      return 'перенос по предложению';
    case TYPE_FORMATS.WORD:
      return 'перенос по слову';
    default:
      return 'select';
  }
}

export default class TextFormatter extends Component {
  state = {
    inputValue: '',
    format: 'select',
    maxLength: null,
    maxNumStr: null,
    res: '',
  };

  handleChange = ({ target: { value: inputValue } }) => {
    this.setState(prevState => ({
      inputValue,
      res: allCheck({
        ...prevState,
        inputValue,
      }),
    }));
  };
  handleChangeMaxLength = ({ target: { value } }) => {
    this.setState((prevState) => ({
      maxLength: value,
      res: allCheck({
        ...prevState,
        maxLength: value,
      }),
    }));
  }

  handleChangeMaxNumOfStr = ({ target: { value } }) => {
    this.setState((prevState) => ({
      maxNumStr: value,
      res: allCheck({
        ...prevState,
        maxNumStr: value,
      }),
    }));
  }

  // TODO: What is that ?)
  menu = (
    <Menu
      onClick={({ key }) => {
        this.setState(prevState => ({
          format: key,
          res: allCheck({
            ...prevState,
            format: key,
          }),
        }));
      }}
    >
      <Menu.Item key={TYPE_FORMATS.NONE}>переносов нет</Menu.Item>
      <Menu.Item key={TYPE_FORMATS.SYMBOL}>перенос по символу</Menu.Item>
      <Menu.Item key={TYPE_FORMATS.SENTENCE}>
        перенос по предложению
      </Menu.Item>
      <Menu.Item key={TYPE_FORMATS.WORD}>перенос по слову</Menu.Item>
    </Menu>
  );
  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={6}>
            <TextArea
              placeholder="input"
              onChange={this.handleChange} // TODO: #1
              value={this.state.inputValue}
              rows={4}
            />
          </Col>
          <Col span={12}>
            <Row type="flex">
              <Col span={12}>Maximum length of string:</Col>
              <Col span={10}>
                <Input
                  size="small"
                  onChange={(e) => this.handleChangeMaxLength(e)} // TODO: #1
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Maximum number od strings:</Col>
              <Col span={10}>
                <Input
                  size="small"
                  onChange={(e) => this.handleChangeMaxNumOfStr(e)} // TODO: #1
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Type of formatting:</Col>
              <Col span={10}>
                <Dropdown overlay={this.menu} trigger={['click']}>
                  <Col>
                    <Input
                      size="small"
                      value={formatToName(this.state.format)}
                    />
                  </Col>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <TextArea
              placeholder="Result:"
              value={this.state.res}
              rows={4}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
