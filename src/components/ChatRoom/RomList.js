import React from 'react'
import { Collapse, Typography, Button } from 'antd'
import styled from 'styled-components'
import { PlusSquareOutlined } from '@ant-design/icons';
import useFirestore from '../../hooks/useFirestore';
import { AuthContext } from '../../Context/AuthProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p{
            color:#fff;
        }

        .ant-collapse-content-box {
            padding:0 40px;
        }
        .add-room {
            color:#fff;
            padding:0;
        }
    }
`;
const LinkStyled = styled(Typography.Link)`
    display: block;
    margin: 0px 0px 15px 0;
`;

export default function RomList() {
    const { user: { uid } } = React.useContext(AuthContext);

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid]);

    const rooms = useFirestore('rooms', roomsCondition)

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sach cac phong" key="1">
                {rooms.map(room => <LinkStyled key={room.id}>{room.name}</LinkStyled>)}
                <Button type='text' icon={<PlusSquareOutlined />} ghost className='add-room'>Them Phong</Button>
            </PanelStyled>
        </Collapse>
    )
}
