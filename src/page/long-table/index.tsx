import React, { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { Form } from "antd";
import { MockData } from './mock';
import NodeList from './node-list';


import 'react-virtualized/styles.css' //导入样式
// @ts-ignore
import {AutoSizer, List} from 'react-virtualized'; //导入list组件

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
          <h1>index: {index}</h1>
          <NodeList dataSource={MockData.list[index].resource_quote_list} nodeNum={index}/>
        </div>
    </div>
  );
}

function LongTable() {
  const [form] = Form.useForm();
  // const [datas, setDatas] = useState<any>(MockData.list)
  const [datas, dispatch] = useReducer(datasReducer, MockData.list);
  const onFinish = (values: any) => {
    console.log(values, 'values')
  };
  useEffect(() => {
    console.log(MockData.list)
  }, [])
  // @ts-ignore
  // @ts-ignore
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
          <div> { datas[0].resource_quote_list[0].quoted_rent_amount} </div>
          <List width={1400} height={600} rowCount={datas.length} rowHeight={800} rowRenderer={rowRenderer}/>,
        </Form>
      </LongTableDiv>
    </React.StrictMode>
  );
}

const LongTableDiv = styled.div`

`
export default LongTable;