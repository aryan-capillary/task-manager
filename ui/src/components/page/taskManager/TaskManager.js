import React from "react"
import { Layout, Flex,Button } from 'antd';
import Table from "../../atom/Table/Table"
import Modal from "../../atom/Modal/Modal"

const { Header, Footer, Content } = Layout;
const headerStyle = {
    // textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
  };
function TaskManager() {

  
  return (
    <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
      <Flex gap="middle" wrap="wrap">
        <div>Task manager</div>
        <div><Modal >Create Task</Modal></div> 
     </Flex>
      </Header>
      <Content style={contentStyle}><Table/></Content>
    </Layout>
    </Flex>
  );
}

export default TaskManager;
