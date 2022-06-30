import React from 'react';
import JsxParser from 'react-jsx-parser';
// import Library from 'some-library-of-components'
import ReactDOM from 'react-dom';
import antd from 'antd';
import {
  Table,
  message,
  // Button
} from 'antd';
import 'antd/dist/antd.css';

const InjectableComponent = () => {
  return <>InjectableComponent</>;
};

// class InjectableComponent extends Component {
//   static defaultProps = {
//     eventHandler: () => {},
//   };
//   // ... inner workings of InjectableComponent
// }

const MyComponent = ({ response }) => {
  const { columns, dataSource, jsx } = response;
  // console.log(jsx);
  // console.log(columns);
  const onClick = () => message.info('hello');
  return (
    <>
      <JsxParser
        // bindings={{
        //   foo: 'bar',
        //   myEventHandler: () => {
        //     /* ... do stuff ... */
        //   },
        // }}
        bindings={{
          columns,
          // columns: eval(columns),
          dataSource,
          onClick: () => message.info('hello world'),
        }}
        // bindings={{
        //   columns: [
        //     ...columns,
        //     // {
        //     //   ...columns[3],
        //     //   render: eval(`(value, record) => {
        //     //     return (
        //     //       <>
        //     //         <a onClick={() => message.info('删除')}>删除</a>
        //     //       </>
        //     //     );
        //     //   }`),
        //     // },
        //   ],
        //   dataSource,
        // }}
        // components={{ InjectableComponent, ...antd }}
        // components={{ InjectableComponent, Table, Button }}
        components={{ InjectableComponent, Table }}
        // components={{ InjectableComponent, Library }}
        // jsx={`
        //   <h1>Header</h1>
        //   <InjectableComponent eventHandler={myEventHandler} truthyProp />
        //   <Library.SomeComponent someProp={foo} calc={1 + 1} stringProp="foo" />
        //   <Library.DataFetcher>((data) => <div>{data.name}</div>)</Library.DataFetcher>
        // `}
        // jsx={`
        //   <Table columns={[ { name: '姓名', dataIndex: 'name' } ]} dataSource={[{ name: 'zs' }]} />
        // `}
        jsx={jsx}
      />
    </>
  );
};

// const response = {
//   columns: `[
//     { key: 'name', dataIndex: 'name', title: '姓名' },
//     { key: 'age', dataIndex: 'age', title: '年龄' },
//     { key: 'gender', dataIndex: 'gender', title: '性别' },
//     {
//       title: '操作',
//       dataIndex: 'operation',
//       key: 'operation',
//       align: 'center',
//       render: (value, record) => {
//         return (
//           <>
//             <Button onClick={() => message.info('删除')}>删除</Button>
//           </>
//         );
//       },
//     },
//   ]`,
//   dataSource: [{ id: 123, name: 'zs', age: 22, gender: '男' }],
//   jsx: `
//     <Table rowKey='id' columns={columns} dataSource={dataSource} />
//   `,
// };

// const response = {
//   columns: [
//     { key: 'name', dataIndex: 'name', title: '姓名' },
//     { key: 'age', dataIndex: 'age', title: '年龄' },
//     { key: 'gender', dataIndex: 'gender', title: '性别' },
//     {
//       title: '操作',
//       dataIndex: 'operation',
//       key: 'operation',
//       align: 'center',
//       render: (value, record) => {
//         return (
//           <>
//             <Button onClick={() => message.info('删除')}>删除</Button>
//           </>
//         );
//       },
//     },
//   ],
//   dataSource: [{ id: 123, name: 'zs', age: 22, gender: '男' }],
//   jsx: `
//     <Table rowKey='id' columns={columns} dataSource={dataSource} />
//   `,
// };

// const response = {
//   // columns: [],
//   dataSource: [{ id: 123, name: 'zs', age: 22, gender: '男' }],
//   jsx: `
//     <Table rowKey='id' columns={[
//       { key: 'name', dataIndex: 'name', title: '姓名' },
//       { key: 'age', dataIndex: 'age', title: '年龄' },
//       { key: 'gender', dataIndex: 'gender', title: '性别' },
//       {
//         title: '操作',
//         dataIndex: 'operation',
//         key: 'operation',
//         align: 'center',
//         render: (value, record) => {
//           return (
//             <>
//               <Button onClick={() => message.info('删除')}>删除</Button>
//             </>
//           );
//         },
//       },
//     ]} dataSource={dataSource} />
//   `,
// };

// console.log(response);

// const response = JSON.parse(
//   '{"columns":[{"key":"name","dataIndex":"name","title":"姓名"},{"key":"age","dataIndex":"age","title":"年龄"},{"key":"gender","dataIndex":"gender","title":"性别"}],"dataSource":[{"id":123,"name":"zs","age":22,"gender":"男"}],"jsx":"\\n    <Table rowKey=\\"id\\" columns={columns} dataSource={dataSource} />\\n  "}'
// );

// ReactDOM.render(<MyComponent response={response} />, document.body);

export default MyComponent;
