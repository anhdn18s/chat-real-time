import { Form, Input, Modal } from 'antd'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/service';

export default function AddRooms(visible) {

    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const { user: { uid }, } = useContext(AuthContext);

    const [form] = Form.useForm();
    const handleOK = () => {
        //add new room
        addDocument('rooms', {
            ...form.getFieldValue(), members: [uid]
        })

        //reset form
        form.resetFields();
        setIsAddRoomVisible(false)
    }

    const handleCanel = () => {
        form.resetFields();
        setIsAddRoomVisible(false)
    }


    return (
        <div>
            <Modal
                title="tao phong"
                visible={isAddRoomVisible}
                onOk={handleOK}
                onCancel={handleCanel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Ten Phong" name='name'>
                        <Input.TextArea placeholder='Nhap ten phong'></Input.TextArea>
                    </Form.Item>
                    <Form.Item label="Mo ta" name='description'>
                        <Input.TextArea placeholder='Nhap mo ta'></Input.TextArea>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
