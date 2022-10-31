import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { auth, db } from '../../firebase/config';
import { AuthContext } from '../../Context/AuthProvider';

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
    const {
        user: { displayName, photoURL },
    } = React.useContext(AuthContext);
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>{photoURL ? "" : displayName && displayName.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className='useName'>{displayName}</Typography.Text>
            </div>
            <Button ghost className='buttonLogout' onClick={() => auth.signOut()}>Dang Xuat</Button>
        </WrapperStyled>
    )
}
