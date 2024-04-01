import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateForm from "../Form/CreateTaskForm"
const App = ({children}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
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
        
        <CreateForm closeModal = {handleCancel}/>
      </Modal>
    </>
  );
};
export default App;