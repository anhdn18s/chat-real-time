import React from 'react'
import { Row, Col } from 'antd'
import UserInfo from './UserInfo'
import RomList from './RomList'
import styled from 'styled-components'

const SideBarStyled = styled.div`
    background: #3f0e40;
    color:#fff;
    height:100vh;
`;


export default function SideBar() {
    return (
        <SideBarStyled>
            <Row>
                <Col span={24}>
                    <UserInfo></UserInfo>
                </Col>
                <Col span={24}>
                    <RomList></RomList>
                </Col>
            </Row>
        </SideBarStyled>
    )
}
