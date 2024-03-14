import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import EditTaskForm from "../Form/EditTaskForm"
import { connect } from 'react-redux';
const App = ({children,id}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        {children}
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
          footer={null}
      >
        <EditTaskForm closeModal = {handleCancel} id={id}/>
      </Modal>
    </>
  );
  
};

export default App;