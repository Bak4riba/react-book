import React, { useState } from 'react'
import { Modal,  Form, Input} from 'antd'
export default function ModalEdit(props){

    const[regName, setRegName] = useState(props.register.name)
    const[regAddress, setRegAddress] = useState(props.register.address)
    const[regPhone, setRegPhone] = useState(props.register.phone)
    const handleOk = () => {
        props.trigger.setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        props.trigger.setIsModalVisible(false);
      };
  

    return(
        <Modal title="Editando Registro" visible={props.triggerStatus.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
            <Form.Item
                label="Name"
            >
                <Input value={regName} onChange={(e)=>{setRegName(e.target.value)}}/>
            </Form.Item>

            <Form.Item
                label="Address"
            >
                <Input value={regAddress} onChange={(e)=>{setRegAddress(e.target.value)}}  />
            </Form.Item>

            <Form.Item
                label="Phone"
            >
                <Input value={regPhone} onChange={(e)=>{setRegPhone(e.target.value)}}  />
            </Form.Item>
        </Form>
    </Modal>
    )
}