import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import arrayProcessingTool from "./func";
const FIRST_ARRAY = [-1, 2, 3, -9];
const SECOND_ARRAY = [2, -1, 2, 3, -9];
const THIRD_ARRAY = [-1, 2, 3, -9, 11];
const FORTH_ARRAY = [-2, -1, 1, 2];
const FIFTH_ARRAY = [100, -9, 2, -3, 5];
const SIX_ARRAY = [1, 2, 3];
const SEVEN_ARRAY = [-1, -2, -3];

export default class Arr extends Component {
  render() {
    const columns = [
      {
        title: "Array",
        dataIndex: "name",
        key: "name",
        render: text => <a>{text}</a>
      },
      {
        title: "Min number",
        dataIndex: "minNumber",
        key: "minNumber"
      },
      {
        title: "Max number",
        dataIndex: "max",
        key: "max"
      },
      {
        title: "Sub sum",
        dataIndex: "sub",
        key: "sub"
      },
      {
        title: "Mediana",
        dataIndex: "mediana",
        key: "mediana"
      },
      {
        title: "NumberOfUpperSequence",
        dataIndex: "numberOfUpper",
        key: "umberOfUpper"
      }
    ];

    const data = [
      {
        key: "1",
        name: `${FIRST_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(FIRST_ARRAY),
        minNumber: arrayProcessingTool.findMin(FIRST_ARRAY),
        max: arrayProcessingTool.findMax(FIRST_ARRAY),
        mediana: arrayProcessingTool.findMediana(FIRST_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          FIRST_ARRAY
        )
      },
      {
        key: "2",
        name: `${SECOND_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(SECOND_ARRAY),
        minNumber: arrayProcessingTool.findMin(SECOND_ARRAY),
        max: arrayProcessingTool.findMax(SECOND_ARRAY),
        mediana: arrayProcessingTool.findMediana(SECOND_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          SECOND_ARRAY
        )
      },
      {
        key: "3",
        name: `${THIRD_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(THIRD_ARRAY),
        minNumber: arrayProcessingTool.findMin(THIRD_ARRAY),
        max: arrayProcessingTool.findMax(THIRD_ARRAY),
        mediana: arrayProcessingTool.findMediana(THIRD_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          THIRD_ARRAY
        )
      },
      {
        key: "4",
        name: `${FORTH_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(FORTH_ARRAY),
        minNumber: arrayProcessingTool.findMin(FORTH_ARRAY),
        age: arrayProcessingTool.findMin(FORTH_ARRAY),
        max: arrayProcessingTool.findMax(FORTH_ARRAY),
        mediana: arrayProcessingTool.findMediana(FORTH_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          FORTH_ARRAY
        )
      },
      {
        key: "5",
        name: `${FIFTH_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(FIFTH_ARRAY),
        minNumber: arrayProcessingTool.findMin(FIFTH_ARRAY),
        age: arrayProcessingTool.findMin(FIFTH_ARRAY),
        max: arrayProcessingTool.findMax(FIFTH_ARRAY),
        mediana: arrayProcessingTool.findMediana(FIFTH_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          FIFTH_ARRAY
        )
      },
      {
        key: "6",
        name: `${SIX_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(SIX_ARRAY),
        minNumber: arrayProcessingTool.findMin(SIX_ARRAY),
        age: arrayProcessingTool.findMin(SIX_ARRAY),
        max: arrayProcessingTool.findMax(SIX_ARRAY),
        mediana: arrayProcessingTool.findMediana(SIX_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(SIX_ARRAY)
      },
      {
        key: "7",
        name: `${SEVEN_ARRAY}`,
        sub: arrayProcessingTool.getMaxSubSum(SEVEN_ARRAY),
        minNumber: arrayProcessingTool.findMin(SEVEN_ARRAY),
        age: arrayProcessingTool.findMin(SEVEN_ARRAY),
        max: arrayProcessingTool.findMax(SEVEN_ARRAY),
        mediana: arrayProcessingTool.findMediana(SEVEN_ARRAY),
        numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(
          SEVEN_ARRAY
        )
      }
    ];

    return <Table columns={columns} dataSource={data} />;
  }
}
