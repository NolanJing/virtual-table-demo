import React, { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { Form } from "antd";
import { mockList } from './mock';
import NodeList from './node-list';



import 'react-virtualized/styles.css' //导入样式
// @ts-ignore
import { AutoSizer, List } from 'react-virtualized'; //导入list组件

import VirtualList from 'rc-virtual-list';
 const datasReducer = (state: any, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'CONCAT':
      const {fileList} = payload
      const result = state.concat(fileList)
      return [...result]
    case 'UPDATE':
      console.log(payload, 'payloadpayloadpayload')
      return [...state]
    default:
      return state
  }
};

// @ts-ignore
function rowRenderer({
                       key,            // 唯一值
                       index,          // 索引号
                       isScrolling,    // 是否在滚动中
                       isVisible,      // 当前行在list中是否可见
                       style,          // 每行的样式对象
                     }: any) {
  return (
    <div key={key} style={style}>
        <div>
          <h3>index: {index} site: {mockList[index].site.name} </h3>
          <NodeList dataSource={mockList[index].resource_quote_list} nodeNum={index}/>
        </div>
    </div>
  );
}

function LongTable() {
  const [form] = Form.useForm();
  const [datas, dispatch] = useReducer(datasReducer, mockList);
  const onFinish = (values: any) => {
    console.log(values, 'values')
  };
  useEffect(() => {
    console.log(mockList)
  }, [])
 
  return (
    <React.StrictMode>
      <LongTableDiv>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
          // initialValues={{ time: formTime, rangeTime: [dayjs().subtract(1, 'day'), dayjs()] }}
          onValuesChange={(vals) => dispatch({
            type: 'UPDATE',
            payload: {vals}
          })}
        >
          {/*{datas.map((item: any, index: number) => {*/}
          {/*  return <div key={index}>*/}
          {/*    <p>节点{index}: {item.site.name ?? '--'}</p>*/}
          {/*    <NodeList dataSource={item.resource_quote_list} nodeNum={index}/>*/}
          {/*  </div>*/}
          {/*})}*/}
          {/*自动计算大小还有问题*/}
          {/*<AutoSizer>*/}
          {/*  {({height, width}: any) => (*/}
          {/*    <div>*/}
          {/*      <List*/}
          {/*        height={height}*/}
          {/*        rowCount={datas.length}*/}
          {/*        rowHeight={200}   //高度是item-name的css高度*/}
          {/*        rowRenderer={rowRenderer}*/}
          {/*        width={width}*/}
          {/*      />*/}
          {/*      width:{width}*/}
          {/*      height:{height}*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</AutoSizer>*/}
          <List width={1400} height={600} rowCount={datas.length} rowHeight={800} rowRenderer={rowRenderer}/>,
          
          {/* <VirtualList data={mockList} height={800} itemHeight={300} itemKey="id">
            {(item: any, index:number) => {
              return (
              <div key={index}>
                site: {item.site.name} 
                index: {index} 
                <NodeList dataSource={item.resource_quote_list} nodeNum={index}/>
              </div>)
            }}
          </VirtualList>; */}
        </Form>
      </LongTableDiv>
    </React.StrictMode>
  );
}

const LongTableDiv = styled.div`

`
export default LongTable;