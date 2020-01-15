import React, { Component } from 'react';
import {
  Menu, Dropdown, Input, Row, Col,
} from 'antd';
import { typeFormat, allCheck, TYPE_FORMATS } from './func'; // TODO: Same

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
    res: '', // TODO: Is it means result ?,
  };

  handleChange = ({ target: { value: inputValue } }) => {
    // const inputValue = e.target.value; TODO:
    this.setState({ inputValue }); // this.state.inputValue не поменяется
    this.setState(prevState => ({
      res: allCheck({
        ...prevState,
        inputValue,
      }),
    }));
    // this.setState({
    //   res: allCheck({
    //     ...this.state, // TODO: It's not good
    //     inputValue,
    //   }),
    // });
  };

  render() {
    // TODO: Should we init handlers in render ?)
    // const handleChange = e => {
    //   const inputValue = e.target.value;
    //   this.setState({ inputValue }); // this.state.inputValue не поменяется
    //   this.setState(prevState => ({
    //     res: allCheck({
    //       ...prevState,
    //       inputValue,
    //     }),
    //   }));
    //   // this.setState({
    //   //   res: allCheck({
    //   //     ...this.state, // TODO: It's not good
    //   //     inputValue,
    //   //   }),
    //   // });
    // };

    // TODO:
    const menu = (
      <Menu
        onClick={e => {
          this.setState({
            format: e.key,
            res: allCheck({ ...this.state, format: e.key }), // TODO: Same
          });
          // const res = typeFormat(this.state.inputValue, e.key);
          // this.setState({ inputValue: res,  });
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

    return (
      <div>
        <Row type="flex">
          <Col span={6}>
            <TextArea
              placeholder="input"
              onChange={this.handleChange}
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
                  onChange={value => {
                    // let str = maxLength(
                    //   this.state.inputValue,
                    //   value.target.value
                    // );

                    this.setState({
                      maxLength: value.target.value,
                      res: allCheck({
                        ...this.state, // TODO: Same
                        maxLength: value.target.value,
                      }),
                    });
                  }}
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Maximum number od strings:</Col>
              <Col span={10}>
                <Input
                  size="small"
                  onChange={value => {
                    this.setState({
                      maxNumStr: value.target.value,
                      res: allCheck({
                        ...this.state, // TODO: Same
                        maxNumStr: value.target.value,
                      }),
                    });
                  }}
                />
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Type of formatting:</Col>
              <Col span={10}>
                <Dropdown overlay={menu} trigger={['click']}>
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
