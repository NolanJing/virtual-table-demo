import React from 'react';
import styled from '@emotion/styled';
import {Table, Form, InputNumber, Select} from "antd";

function NodeList( props: any ) {
  const {dataSource, nodeNum} = props

  const columnList = [
    {
      title: '产品名称',
      dataIndex: ['product', 'name'],
    },
    {
      title: '资源类型',
      dataIndex: ['resource_type', 'name'],
    },
    {
      title: '资源名称',
      dataIndex: 'resource_alias',
      colSpan: 1
    },
    {
      title: '售卖方式',
      dataIndex: ['sell_type', 'name'],
      colSpan: 1
    },
    {
      title: '数量/带宽',
      dataIndex: 'count',
      showSorterTooltip: false,
      render: (text: number, record: any)=> text ?? 0 / record.bandwidth ?? 0
    },
    {
      title: ' 列表价',
      dataIndex: 'list_price_rmb',
      showSorterTooltip: false,
    },
    {
      title: ' 最低价',
      dataIndex: 'lowest_price_rmb',
      showSorterTooltip: false,
    },
    {
      title: ' 月租费用',
      dataIndex: 'quoted_rent_amount',
      showSorterTooltip: false,
      render: (text: number, record: any, idx: number)=>{
        return <Form.Item
          name={'quoted_rent_amount-' + nodeNum + '-' + idx}
          label={''}
          initialValue={text}
        >
          <InputNumber style={{width: '95%'}} placeholder="请填写月租报价金额" />
        </Form.Item>
      }
    },
    {
      title: ' 一次性费用',
      dataIndex: 'quoted_onetime_amount',
      showSorterTooltip: false,
      render: (text: number, record: any, idx: number)=>{
        return <Form.Item
          name={'quoted_onetime_amount_rmb-' + nodeNum + '-' + idx}
          label={''}
          initialValue={text}
        >
          <InputNumber style={{width: '95%'}} placeholder="请填写月租报价金额" />
        </Form.Item>
      }
    },
  ]

  return (
    <NodeTableDiv
      title={() => {
        return <div>
          <Select
            style={{width:120}}
          >
            <Select.Option key={'rmb'}>人民币</Select.Option>
            <Select.Option key={'usd'}>美元</Select.Option>
            <Select.Option key={'hk'}>港币</Select.Option>
          </Select>
        </div>
      }}
      columns={[...columnList]}
      dataSource={[...dataSource]}
      rowKey={(record: any) => record.tech_solution_resource_detail_id}
      pagination={false}
      footer={() => {
        return <div className={'foot-div'}>
          <span>单月月租总额: 0</span>
          <span>一次性总收入: 0</span>
        </div>
      }}
    />
  );
}
const NodeTableDiv = styled(Table)`
  margin-bottom: 50px;
  .ant-table-title {
    padding: 0 0 10px 0;
  }
  .foot-div{
    text-align: right;
    padding-right: 20%;
    span:first-of-type{
      margin-right: 60px;
    }
  }
`
export default NodeList;