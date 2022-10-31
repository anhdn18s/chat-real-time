import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    display:flex;
    justify-content:space-between;
    padding:12px 16px;
    .useName {
        color:#fff;
        padding: 0 0 0 5px;
    }
`;

export default function UserInfo() {
    return (
        <WrapperStyled>
            <div>
                <Avatar >A</Avatar>
                <Typography.Text className='useName'>Ngoc Anh</Typography.Text>
            </div>
            <Button ghost className='buttonLogout'>Dang Xuat</Button>
        </WrapperStyled>
    )
}
