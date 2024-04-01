import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input,Radio } from 'antd';

const App = ({closeModal,createTask}) => {
  const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log('Success:', values);
        createTask({...values,id:Date.now()})
        form.resetFields()
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
      // remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    form = {form}
  >
    <Form.Item
      label="Title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input Title',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Descriptation"
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
        Create
      </Button>
    </Form.Item>
  </Form>
)};

  function mapDispatchToProps(dispatch) {
    return {
      createTask:(task)=>{dispatch({type:"ADD_TASK",task:task})} 
    };
  }
  export default  connect(null,mapDispatchToProps)(App)
// export default App;