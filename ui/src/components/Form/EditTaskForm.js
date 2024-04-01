import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input,Radio } from 'antd';

const App = ({closeModal,updateTask,task,id}) => {
    console.log("id",id,task)
    const onFinish = (values) => {
        console.log('Success:', values);
        updateTask({...task[0],...values})
        closeModal()
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
        title: task[0]?.title,
        description: task[0]?.description,
        status: task[0]?.status,
      }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    
  >
    <Form.Item
      label="Title"
      name="title"
      value ={task?.title}
      rules={[
        {
          required: true,
          message: 'Please input Title',
        },
      ]}
    >
      <Input value ={task?.title}/>
    </Form.Item>
    <Form.Item
      label="Descripition"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input Discription',
        },
      ]}
    >
      <Input />
    </Form.Item>

     <Form.Item name="status" label="Status"  rules={[{ required: true, message: 'Please pick an item!' }]}>
      <Radio.Group>
        <Radio value="completed">Complete</Radio>
        <Radio value="incomplete">Incomplete</Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Update Task
      </Button>
    </Form.Item>
  </Form>
)};
const mapStateToProps = (state,props)=>{
    return {
      task: state.get('taskList').toJS().filter((value)=>{
        return value.id === props?.id
      }),
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      updateTask:(task)=>{dispatch({type:"UPDATE_TASK",task})} 
    };
  }

  
export default  connect(mapStateToProps,mapDispatchToProps)(App)