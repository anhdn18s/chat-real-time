import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { auth, db } from '../../firebase/config';

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

    React.useEffect(() => {
        db.collection('users').onSnapshot((snapshot) => {
            //cover du lieu thuan firebase thanh ojb js 
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
        })

    }, [])
    return (
        <WrapperStyled>
            <div>
                <Avatar >A</Avatar>
                <Typography.Text className='useName'>Ngoc Anh</Typography.Text>
            </div>
            <Button ghost className='buttonLogout' onClick={() => auth.signOut()}>Dang Xuat</Button>
        </WrapperStyled>
    )
}
