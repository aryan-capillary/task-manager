import React, { useEffect } from "react";
import { Space, Table, Tag, Button } from "antd";
import { connect } from "react-redux";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Task",
    dataIndex: "title",
    key: "title",
    render: (text, { id }) => <Link to={`/task-details/${id}`}>{text}</Link>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    key: "Completed",
    dataIndex: "status",
    render: (_, { status }) => (
      <Tag
        color={`${status === "completed" ? "green" : "geekblue"}`}
        key={status}
      >
        {status?.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <EditModal id={record?.id}> Edit </EditModal>
          <DeleteModal id={record?.id}> Delete </DeleteModal>
        </Space>
      );
    },
  },
];

const data = [
  {
    key: "1",
    title: "Learn Guitar",
    description: "Have to learn guitar daily 1 hour",
    status: "incomplete",
  },
  {
    key: "2",
    title: "Study Stock Market",
    description: "study stock market for latest copany",
    status: "completed",
  },
  {
    key: "3",
    title: "Buy Food",
    description: "buy food for myself",
    status: "completed",
  },
];

const ListTable = ({ taskList, getTask, taskLoading }) => {
  useEffect(() => {
    getTask();
  }, []);

  if (taskLoading) {
    return <div>Loading....</div>;
  }
  return <Table columns={columns} dataSource={taskList} pagination={false} />;
};

const mapStateToProps = (state) => {
  console.log("task loading", state.get("taskLoading"));
  return {
    taskList: state.get("taskList").toJS(),
    taskLoading: state.get("taskLoading"),
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getTask: () => {
      dispatch({ type: "GET_TASK" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);

// export default App;
