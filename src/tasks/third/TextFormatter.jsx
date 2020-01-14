import React, { Component } from "react";
import { maxNumberOfStrings, typeFormat, maxLength, allCheck } from "./func";
import { Menu, Dropdown, Icon, Input, Row, Col } from "antd";
const { TextArea } = Input;

export default class TextFormatter extends Component {
  state = {
    inputValue: "",
    format: "select",
    maxLength: null,
    maxNumStr: null
  };

  render() {
    const menu = (
      <Menu
        onClick={e => {
          this.setState({ format: e.item.props.children });
          const res = typeFormat(this.state.inputValue, e.item.props.children);
          this.setState({ inputValue: res });
        }}
      >
        <Menu.Item key="0"></Menu.Item>
        <Menu.Item key="1">перенос по символу</Menu.Item>
        <Menu.Item key="2">перенос по предложению</Menu.Item>
        <Menu.Item key="3">перенос по слову</Menu.Item>
        <Menu.Item key="4">переносов нет</Menu.Item>
      </Menu>
    );
    const onChange = e => {
      this.setState({ inputValue: e.target.value });
      allCheck(
        this.setState.inputValue,
        this.state.format,
        this.state.maxLength,
        this.state.maxNumStr
      );
    };
    return (
      <div>
        <Row type="flex">
          <Col span={5}>
            <TextArea
              placeholder="input"
              onChange={onChange}
              value={this.state.inputValue}
            ></TextArea>
          </Col>
          <Col span={15}>
            <Row type="flex">
              <Col span={5}>Maximum length of string:</Col>
              <Col>
                <Input
                  size="small"
                  onChange={value => {
                    // let str = maxLength(
                    //   this.state.inputValue,
                    //   value.target.value
                    // );

                    this.setState({ maxLength: value.target.value });
                  }}
                ></Input>
              </Col>
            </Row>
            <Row type="flex">
              <Col span={5}>Maximum number od strings:</Col>
              <Col>
                <Input
                  size="small"
                  onChange={value => {
                    // let str = maxNumberOfStrings(
                    //   this.state.inputValue,
                    //   value.target.value
                    // );

                    this.setState({ maxNumStr: value.target.value });
                  }}
                ></Input>
              </Col>
            </Row>
            <Row type="flex">
              <Col span={5}>Type of formatting:</Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Col>
                  <Input size="small" value={this.state.format} />
                </Col>
              </Dropdown>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
