import React, { Component } from "react";
import { typeFormat, allCheck, TYPE_FORMATS } from "./func";
import { Menu, Dropdown, Input, Row, Col } from "antd";
const { TextArea } = Input;

function formatToName(key) {
  switch (key) {
    case TYPE_FORMATS.NONE:
      return "переносов нет";
    case TYPE_FORMATS.SYMBOL:
      return "перенос по символу";
    case TYPE_FORMATS.SENTENCE:
      return "перенос по предложению";
    case TYPE_FORMATS.WORD:
      return "перенос по слову";
    default:
      return "select";
  }
}
export default class TextFormatter extends Component {
  state = {
    inputValue: "",
    format: "select",
    maxLength: null,
    maxNumStr: null,
    res: ""
  };

  render() {
    const menu = (
      <Menu
        onClick={e => {
          this.setState({
            format: e.key,
            res: allCheck({ ...this.state, format: e.key })
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
    const onChange = e => {
      const inputValue = e.target.value;
      this.setState({ inputValue: inputValue }); // this.state.inputValue не поменяется
      this.setState({
        res: allCheck({
          ...this.state,
          inputValue: inputValue
        })
      });
    };
    return (
      <div>
        <Row type="flex">
          <Col span={6}>
            <TextArea
              placeholder="input"
              onChange={onChange}
              value={this.state.inputValue}
              rows={4}
            ></TextArea>
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
                        ...this.state,
                        maxLength: value.target.value
                      })
                    });
                  }}
                ></Input>
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
                        ...this.state,
                        maxNumStr: value.target.value
                      })
                    });
                  }}
                ></Input>
              </Col>
            </Row>
            <Row type="flex">
              <Col span={12}>Type of formatting:</Col>
              <Col span={10}>
                <Dropdown overlay={menu} trigger={["click"]}>
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
            ></TextArea>
          </Col>
        </Row>
      </div>
    );
  }
}
