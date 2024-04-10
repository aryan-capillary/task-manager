import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Layout, Flex, Button } from "antd";
import { useParams, Link } from "react-router-dom";
const headerStyle = {
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};
const TaskDetails = ({ taskList }) => {
  const { Header, Content } = Layout;
  let { id } = useParams();
  const task = taskList.filter((task) => task.id === id);

  console.log(task);
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Flex gap="middle" wrap="wrap">
            <div
              style={{
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <Link to="/" style={{ color: "white" }}>
                Task manager
              </Link>
            </div>
          </Flex>
        </Header>
        <Content style={contentStyle}>
          <Card title={task[0]?.title} style={{ width: "100%" }}>
            <p>{task[0]?.description}</p>
          </Card>
        </Content>
      </Layout>
    </Flex>
  );
};

const mapStateToProps = (state, props) => {
  return {
    taskList: state.get("taskList").toJS(),
  };
};

export default connect(mapStateToProps, null)(TaskDetails);

// export default App;
