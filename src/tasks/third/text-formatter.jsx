import React, { Component } from 'react';
import {
  Dropdown, Input, Row, Col,
} from 'antd';
import { checkAllFields, TYPE_FORMATS } from './utils';
import MenuHyphenation from './menu-hyphenation';

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
  

  handleChangeTextArea = ({ target: { value: inputValue } }) => {
    this.setState(prevState => ({
      inputValue,
      res: checkAllFields({
        ...prevState,
        inputValue,
      }),
    }));
  };

  handleChangeMaxLength = ({ target: { value } }) => {
    this.setState((prevState) => ({
      maxLength: value,
      res: checkAllFields({
        ...prevState,
        maxLength: value,
      }),
    }));
  }

  handleChangeMaxNumOfStr = ({ target: { value } }) =>
    this.setState((prevState) => ({
      maxNumStr: value,
      res: checkAllFields({
        ...prevState,
        maxNumStr: value,
      }),
    }));

  render() {
    return (
      <div>
        <Row type="flex">
          <Col span={6}>
            <TextArea
              placeholder="input"
              onChange={this.handleChangeTextArea}
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
                  onChange={this.handleChangeMaxLength}
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Maximum number od strings:</Col>
              <Col span={10}>
                <Input
                  size="small"
                  onChange={this.handleChangeMaxNumOfStr}
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Type of formatting:</Col>
              <Col span={10}>
                <Dropdown overlay={MenuHyphenation((newState) => this.setState(newState), this.state)} trigger={['click']}>
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
