import React from 'react'
import styled from 'styled-components/native'
import {Ionicons, Fontisto, FontAwesome} from '@expo/vector-icons'
import Avatar from './Avatar'

const Container = styled.View`
width:100%;
height:90px;
margin-top:10px;
`;

const Row = styled.View`
flex-direction:row;
background:#fff;
width:100%;
padding: 0 11px;
align-items:center;
`;

const Input = styled.TextInput`
width:100%;
height:50px;
padding: 0 8px;
`;

const Divider = styled.View`
width:100%;
height:0.6px;
background:#ccc;
`;

const Menu = styled.View`
flex:1;
flex-direction:row;
align-items:center;
justify-content:center;
height:42px;
`;

const MenuText = styled.Text`
padding-left:11px;
font-weight:500;
font-size:12px
`;

const Separator = styled.View`
width:1px;
height:35px;
background:#ccc;
`;

const BottomdDvider = styled.View`
width:100%;
height:9px;
background:#ccc;
`;

const Button = styled.TouchableOpacity`
flex:1
`;


const ToolBar = () =>{
    return (
        <>
        <Container>
            <Row>
                <Avatar source={require('../assets/user.jpg')} />
                <Input placeholder='No que você está pensando?' />
            </Row>
            <Divider/>
            <Row>
                <Button>
                    <Menu>
                        <Ionicons name='ios-videocam' size={22} color='#ff4337' />
                        <MenuText>Ao vivo</MenuText>
                    </Menu>
                </Button>
                <Separator/>
                <Button>
                    <Menu>
                        <Fontisto name='photograph' size={20} color='#4caf50' />
                        <MenuText>Foto</MenuText>
                    </Menu>
                </Button>
                <Separator/>
                <Button>
                    <Menu>
                        <FontAwesome name='map-marker' size={20} color='#ff4337' />
                        <MenuText>Check-in</MenuText>
                    </Menu>
                </Button>
            </Row>
        </Container>
        <BottomdDvider/>
        </>
    )
}

export default ToolBar;