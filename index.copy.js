import React from 'react';
import JsxParser from 'react-jsx-parser';
// import Library from 'some-library-of-components'
import ReactDOM from 'react-dom';
import { Table } from 'antd';
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

const MyComponent = ({ jsx }) => (
  <JsxParser
    // bindings={{
    //   foo: 'bar',
    //   myEventHandler: () => {
    //     /* ... do stuff ... */
    //   },
    // }}
    bindings={{}}
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
);

const response = {
  jsx: `
  <Table columns={[ { name: '姓名', dataIndex: 'name' } ]} dataSource={[{ name: 'zs' }]} />
`,
};

ReactDOM.render(<MyComponent jsx={response.jsx} />, document.body);
