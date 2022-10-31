import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    margin:0 0 10px 0;
    .auth {
        margin:0 5px 0 5px;
        font-weight:bold;
    }
    .date {
        margin: 0 10px 0 10px;
        font-size: 11px;
        color:#000;
    }
    .content {
        margin:0 30px 0 30px;
    }
`;

export default function Message({ text, displayName, createDate, photoURL }) {
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL} size='small'>A</Avatar>
                <Typography.Text className="auth">{displayName}</Typography.Text>
                <Typography.Text className='date'>{createDate}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='content'>{text}</Typography.Text>
            </div>
        </WrapperStyled>
    )
}
