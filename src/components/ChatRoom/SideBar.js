import React from 'react'
import { Row, Col } from 'antd'
import UserInfo from './UserInfo'
import RomList from './RomList'

export default function SideBar() {
    return (
        <Row>
            <Col span={24}>
                <UserInfo></UserInfo>
            </Col>
            <Col span={24}>
                <RomList></RomList>
            </Col>
        </Row>
    )
}
