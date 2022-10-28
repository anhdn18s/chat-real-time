import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';


const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {

    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider)
    }



    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: "center" }} level={3}>
                        Fun chat
                    </Title>
                    <Button style={{ width: "100%", margin: "0 0 10px 0" }}>
                        login Google
                    </Button>
                    <Button style={{ width: "100%", }} onClick={handleFbLogin}>
                        login Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
