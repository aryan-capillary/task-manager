import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
import { connect } from 'react-redux';
import EditModal from "../Modal/EditModal"

const columns = [
  {
    title: 'Task',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Discription',
    dataIndex: 'discriptation',
    key: 'discriptation',
  },
  {
    title: 'Status',
    key: 'Completed',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color={`${status === 'completed' ? 'green' : 'geekblue'}`} key={status}>
        {status?.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => {
      console.log("record",record)
      return (
      <Space size="middle">
        <EditModal id = {record?.key}> Edit </EditModal>
      </Space>
    )},
  },
];

const data = [
  {
    key: '1',
    title: 'Learn Guitar',
    discriptation: 'Have to learn guitar daily 1 hour',
    status: 'incomplete',
  },
  {
    key: '2',
    title: 'Study Stock Market',
    discriptation: 'study stock market for latest copany',
    status: 'completed',
  },
  {
    key: '3',
    title: 'Buy Food',
    discriptation: 'buy food for myself',
    status: 'completed',

  },
];



const App = ({taskList}) => {
  console.log("data",taskList)
return (
  <Table columns={columns} dataSource={taskList} pagination={false} />
)
}

const mapStateToProps = (state)=>{
  return {
    taskList: state.get('taskList').toJS(),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    createTask:(task)=>{dispatch({type:"ADD_TASK",task:task})} 
  };
}

export default  connect(mapStateToProps,mapDispatchToProps)(App)

// export default App;