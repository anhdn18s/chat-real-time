import { Avatar, Button, Form, Tooltip, Input } from 'antd';
import React from 'react'
import styled from 'styled-components'
import { UserAddOutlined } from '@ant-design/icons';
import Message from './Message';

const HeaderStyled = styled.div`
    display: flex;
    justify-content:space-between;
    padding:12px 16px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height:56px;;
    .header_info {
      .header_title {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .header_user {
      display: flex;
      align-items: center;
    }
`;

const ContentStyled = styled.div`
height: calc(100% - 56px);
display:flex;
flex-direction:column;
padding: 11px;
justify-content:flex-end;
`;

const AvatarStyled = styled(Avatar.Group)`
    display: flex;
    margin: 0 0 0 20px;
`;
const WrapperStyled = styled.div`
    height:100vh;
`;
const MessageListStyled = styled.div`
    max-height:100%;
    overflow-y:auto;
`;

const FormStyled = styled(Form)`
display:flex;
justify-content:space-between;
align-items:center;
padding:2px 2px 2px 0;
border:1px solid #ccc;
border-radius:2px;
.ant-form-item {
  flex:1;
  margin:0;
}
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header_info'>
          <p className='header_title'>Room 1</p>
          <span className='header_des'>Day la room 1</span>
        </div>
        <div className='header_user'>
          <Button icon={<UserAddOutlined />} type="text">Moi</Button>
          <AvatarStyled size='small' maxCount={2}>
            <Tooltip title='A'>
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title='B'>
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title='C'>
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title='D'>
              <Avatar>D</Avatar>
            </Tooltip>
          </AvatarStyled>
        </div>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message text="test" photoURL={null} displayName="tung" createdAt="99"></Message>
          <Message text="test" photoURL={null} displayName="tung" createdAt="99"></Message>
          <Message text="test" photoURL={null} displayName="tung" createdAt="99"></Message>
          <Message text="test" photoURL={null} displayName="tung" createdAt="99"></Message>
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input placeholder='Nhap tin nhan..' bordered={false} autoComplete="off" />
          </Form.Item>
          <Button type='primary'>Gui</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  )
}
