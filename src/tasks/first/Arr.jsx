import React, {Component} from 'react';
import { Table, Divider, Tag } from 'antd';
import arrayProcessingTool from "./func"


export default class Arr extends Component {
    
     render() {
   
        const columns = [
            {
              title: 'Array',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
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
                key: 'umberOfUpper',
              },
            
          ];
          
          const data = [
            {
              key: '1',
              name: '[-1, 2, 3, -9]',
              sub: arrayProcessingTool.getMaxSubSum([-1, 2, 3, -9]),
              minNumber: arrayProcessingTool.findMin([-1, 2, 3, -9]),
              max:  arrayProcessingTool.findMax([-1, 2, 3, -9]),
              mediana:arrayProcessingTool.findMediana([-1, 2, 3, -9]),
              numberOfUpper:arrayProcessingTool. findNumberOfUpperSequence([-1, 2, 3, -9]),
            },
            {
              key: '2',
              name: '[2, -1, 2, 3, -9]',
              sub:arrayProcessingTool.getMaxSubSum([2, -1, 2, 3, -9]),
              minNumber: arrayProcessingTool.findMin([2, -1, 2, 3, -9]),
              max:arrayProcessingTool.findMax([2, -1, 2, 3, -9]),
              mediana:arrayProcessingTool.findMediana([2, -1, 2, 3, -9]),
              numberOfUpper:arrayProcessingTool.findNumberOfUpperSequence([2, -1, 2, 3, -9]),
            },
            {
              key: '3',
              name: '[-1, 2, 3, -9, 11] ',
              sub:arrayProcessingTool.getMaxSubSum([-1, 2, 3, -9, 11]),
              minNumber: arrayProcessingTool.findMin([-1, 2, 3, -9, 11]),
              max: arrayProcessingTool.findMax([-1, 2, 3, -9, 11]),
              mediana:arrayProcessingTool.findMediana([-1, 2, 3, -9, 11]),
              numberOfUpper:arrayProcessingTool.findNumberOfUpperSequence([-1, 2, 3, -9, 11]),
            },
            {
                key: '4',
                name:'[-2, -1, 1, 2]',
                sub:arrayProcessingTool.getMaxSubSum([-2, -1, 1, 2]),
                minNumber: arrayProcessingTool.findMin([-2, -1, 1, 2]),
                age: arrayProcessingTool.findMin([-2, -1, 1, 2]),
                max: arrayProcessingTool.findMax([-2, -1, 1, 2]),
                mediana:arrayProcessingTool.findMediana([-2, -1, 1, 2]),
                numberOfUpper:arrayProcessingTool.findNumberOfUpperSequence([-2, -1, 1, 2]),
              },
              {
                key: '5',
                name:'[100, -9, 2, -3, 5]',
                sub:arrayProcessingTool.getMaxSubSum([100, -9, 2, -3, 5]),
                minNumber: arrayProcessingTool.findMin([100, -9, 2, -3, 5]),
                age: arrayProcessingTool.findMin([100, -9, 2, -3, 5]),
                max:arrayProcessingTool.findMax([100, -9, 2, -3, 5]),
                tags: ['nice', 'developer'],
                mediana:arrayProcessingTool.findMediana([100, -9, 2, -3, 5]),
                numberOfUpper:arrayProcessingTool.findNumberOfUpperSequence([100, -9, 2, -3, 5]),
              },
              {
                key: '6',
                name:'[1, 2, 3]',
                sub:arrayProcessingTool.getMaxSubSum([1, 2, 3]),
                minNumber:arrayProcessingTool.findMin([1, 2, 3]),
                age: arrayProcessingTool.findMin([1, 2, 3]),
                max: arrayProcessingTool.findMax([1,2,3]),
                mediana:  arrayProcessingTool.findMediana([1,2,3]),
                numberOfUpper:  arrayProcessingTool.findNumberOfUpperSequence([1,2,3]),
              },
              {
                key: '7',
                name:'[-1, -2, -3]',
                sub:arrayProcessingTool.getMaxSubSum([-1, -2, -3]),
                minNumber: arrayProcessingTool.findMin([-1, -2, -3]),
                age: arrayProcessingTool.findMin([-1, -2, -3]),
                max: arrayProcessingTool.findMax([-1, -2, -3]),
                mediana:arrayProcessingTool.findMediana([-1, -2, -3]),
                numberOfUpper:arrayProcessingTool.findNumberOfUpperSequence([-1, -2, -3]),
              },
          ];
          
    return (
<Table columns={columns} dataSource={data} />
    )

}
}