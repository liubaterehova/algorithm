import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import arrayProcessingTool from "./func";

const TEST_ARRAYS = [
  [-1, 2, 3, -9],
  [2, -1, 2, 3, -9],
  [-1, 2, 3, -9, 11],
  [-2, -1, 1, 2],
  [100, -9, 2, -3, 5],
  [1, 2, 3],
  [-1, -2, -3]
];

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
        key: "numberOfUpper"
      }
    ];

    const data = TEST_ARRAYS.map((testArray, index) => ({
      key: `${index}`,
      name: `[${testArray}]`,
      sub: arrayProcessingTool.getMaxSubSum(testArray),
      minNumber: arrayProcessingTool.findMin(testArray),
      max: arrayProcessingTool.findMax(testArray),
      mediana: arrayProcessingTool.findMediana(testArray),
      numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(testArray)
    }));

    return <Table columns={columns} dataSource={data} />;
  }
}
