import React from 'react'
import styled from 'styled-components/native'
import {MaterialIcons, MaterialCommunityIcons, Entypo, Feather} from '@expo/vector-icons'

const Container = styled.View`
width:100%;
height:58px;
padding:0 11px;
align-items:center;
flex-direction:row;
justify-content:space-between;
`;

const Row = styled.View`
 flex-direction:row;
 flex:1;
 justify-content:space-between;

`;

const MenuItens = styled.View`
align-items:center;
justify-content:space-between;
margin-top:-15px;
`;

const ButtonActive = styled.TouchableOpacity`
borderBottomWidth:3px;
borderBottomColor: #3a86e9;
padding:11px;
margin-right:16px;
z-index:999999999;
`;

const Button = styled.TouchableOpacity`
padding:11px;
margin-right:20px;
`;

const Divider = styled.View`
width:100%;
height:0.6px;
background:#ccc;
margin-top:-9px;

`;
const Menu =()=>{
    return (
        <>
        <Container>
            <Row>
                <MenuItens>
                    <ButtonActive>
                        <Entypo name='home' size={29} color='#3a86e9' />
                    </ButtonActive>
                    
                </MenuItens>
                <MenuItens>
                    <Button>
                        <Feather name='users' size={29} color='#666' />
                    </Button>
                </MenuItens>
                <MenuItens>
                    <Button>
                        <MaterialCommunityIcons name='television-play' size={29} color='#666' />
                    </Button>
                </MenuItens>
                <MenuItens>
                    <Button>
                        <Entypo name='shop' size={29} color='#666' style={{}} />
                    </Button>
                </MenuItens>
                <MenuItens>
                    <Button>
                        <MaterialIcons name='notifications-none' size={29} color='#666' />
                    </Button>
                </MenuItens>
                <MenuItens>
                    <Button>
                        <MaterialIcons name='menu' size={29} color='#666' />
                    </Button>
                </MenuItens>
            </Row>
            
        </Container>
        <Divider/>
        </>

    )
}

export default Menu;