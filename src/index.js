import React from 'react';
import MyComponent from './core.js';
import ReactDOM from 'react-dom';
import { Button, message } from 'antd';

const response = {
  columns: [
    { key: 'name', dataIndex: 'name', title: '姓名' },
    { key: 'age', dataIndex: 'age', title: '年龄' },
    { key: 'gender', dataIndex: 'gender', title: '性别' },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      render: (value, record) => {
        return (
          <>
            <Button onClick={() => message.info('删除')}>删除</Button>
          </>
        );
      },
    },
  ],
  dataSource: [{ id: 123, name: 'zs', age: 22, gender: '男' }],
  jsx: `
    <Table rowKey='id' columns={columns} dataSource={dataSource} />
  `,
};

console.log(`${response.columns[3].render}`);

ReactDOM.render(
  <>
    <div dangerouslySetInnerHTML={{ __html: response }}></div>
    <MyComponent response={response} />
    {/* <pre>{response}</pre> */}
    <code>{`(value, record) => {
        return (
          <>
            <Button onClick={() => message.info('删除')}>删除</Button>
          </>
        );
      }`}</code>
  </>,
  document.body
);
