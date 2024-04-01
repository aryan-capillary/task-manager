import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
const DeleteModal = ({children,task,id,deleteTask}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    console.log("testing",task[0])
    deleteTask(task[0])
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        {children}
      </Button>
      <Modal
        title="Delete Task"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
       <div>Do you want to delete this Task</div>
      </Modal>
    </>
  );
  
};
const mapStateToProps = (state,props)=>{
    return {
      task: state.get('taskList').toJS().filter((value)=>{
        return value.id == props?.id
      }),
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      deleteTask:(task)=>{dispatch({type:"DELETE",task})} 
    };
  }

  
export default  connect(mapStateToProps,mapDispatchToProps)(DeleteModal)