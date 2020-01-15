import React, { Component } from "react";
import { Table, Divider, Tag } from "antd"; // TODO: Why that imported and nothing use ?

import arrayProcessingTool from "./func";

const TEST_ARRAYS = [
  [-1, 2, 3, -9],
  [2, -1, 2, 3, -9],
  [-1, 2, 3, -9, 11],
  [-2, -1, 1, 2],
  [100, -9, 2, -3, 5],
  [1, 2, 3],
  [-1, -2, -3],
];

// export default class Arr extends Component {
//   render() {
//     TODO:
//     const columns = [
//       {
//         title: "Array",
//         dataIndex: "name",
//         key: "name"
//       },
//       {
//         title: "Min number",
//         dataIndex: "minNumber",
//         key: "minNumber"
//       },
//       {
//         title: "Max number",
//         dataIndex: "max",
//         key: "max"
//       },
//       {
//         title: "Sub sum",
//         dataIndex: "sub",
//         key: "sub"
//       },
//       {
//         title: "Mediana",
//         dataIndex: "mediana",
//         key: "mediana"
//       },
//       {
//         title: "NumberOfUpperSequence",
//         dataIndex: "numberOfUpper",
//         key: "numberOfUpper"
//       }
//     ];

//     const data = TEST_ARRAYS.map((testArray, index) => ({
//       key: `${index}`,
//       name: `[${testArray}]`,
//       sub: arrayProcessingTool.getMaxSubSum(testArray),
//       minNumber: arrayProcessingTool.findMin(testArray),
//       max: arrayProcessingTool.findMax(testArray),
//       mediana: arrayProcessingTool.findMediana(testArray),
//       numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(testArray)
//     }));

//     return <Table columns={columns} dataSource={data} />;
//   }
// }

const columns = [
  {
    title: 'Array',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Min number',
    dataIndex: 'minNumber',
    key: 'minNumber',
  },
  {
    title: 'Max number',
    dataIndex: 'max',
    key: 'max',
  },
  {
    title: 'Sub sum',
    dataIndex: 'sub',
    key: 'sub',
  },
  {
    title: 'Mediana',
    dataIndex: 'mediana',
    key: 'mediana',
  },
  {
    title: 'NumberOfUpperSequence',
    dataIndex: 'numberOfUpper',
    key: 'numberOfUpper',
  },
];

const Arr = () => {
  const data = TEST_ARRAYS.map((testArray, index) => ({
    key: `${index}`,
    name: `[${testArray}]`,
    sub: arrayProcessingTool.getMaxSubSum(testArray),
    minNumber: arrayProcessingTool.findMin(testArray),
    max: arrayProcessingTool.findMax(testArray),
    mediana: arrayProcessingTool.findMediana(testArray),
    numberOfUpper: arrayProcessingTool.findNumberOfUpperSequence(testArray),
  }));

  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
};

export default Arr;
