import React, { useEffect, useState } from 'react'
import {Button, Space, Table} from 'antd'
import 'antd/dist/antd.css';
import { getUsers } from '../../services/api'
import ModalEdit from '../../components/ModalEdit';


export default function Home(){
    
    const [data, setData] = useState([""])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [register, setRegister] = useState([""])
    const showModal = (record) => {
        setRegister(record)
        setIsModalVisible(true);
    };
  
    useEffect(()=>{
        getUsers().then((res)=>{
            setData(res)
        })
    },[])

    const columns = [
        {
            title: 'id',
            dataIndex:'_id',
            key:data._id
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: data.name,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },

          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="large">
                <Button type="primary" size="small"  onClick={(()=>{ showModal(record)})}>Edit</Button>
                <Button type="primary" size="small" danger onClick={(()=>{console.log(record._id)})}>Delete</Button>
              </Space>
            ),
          },
    ]


    return(
    <>
        <Table columns={columns} dataSource={data}/>

        <ModalEdit 
            trigger={setIsModalVisible}
            triggerStatus={isModalVisible}
            register={register}
        />
    </>
    )
}