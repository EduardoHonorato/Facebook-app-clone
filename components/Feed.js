import React from 'react'
import styled from 'styled-components/native'
import {Entypo, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from './Avatar'
import { View } from 'react-native';

const Container = styled.View`
flex:1;
`;

const Header = styled.View`
height:50px;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-top:6px;
padding:0 11px
`;

const Button = styled.TouchableOpacity``;

const Row = styled.View`
align-items:center;
flex-direction:row;
`;

const User = styled.Text`
font-size:12px;
font-weight:bold;
color:#222121;
`;

const Time = styled.Text`
font-size:9px;
color:#747476
`;

const Post = styled.Text`
font-size:12px;
color:#222121;
line-height:16px;
padding:0 11px;
`;

const Photo = styled.Image`
margin-top:9px;
width:100%;
height:220px;
`;

const Footer = styled.View`
padding:0 11px;
`;

const FooterCount = styled.View`
flex-direction:row;
justify-content:space-between;
padding:9px 0;
`;

const IconCount = styled.View`
background:#1878f3;
width:20px;
height:20px;
border-radius:10px;
align-items:center;
margin-right:6px;
padding: 3px;
`;

const IconLove = styled.View`
background:#ff4337;
width:20px;
height:20px;
border-radius:10px;
align-items:center;
margin-right:6px;
padding: 4.3px;
`;

const TextCount = styled.Text`
font-size:11px;
color:#424040;
`;

const BottomdDvider = styled.View`
width:100%;
height:9px;
background:#ccc;
`;

const Divider = styled.View`
width:100%;
height:0.6px;
background:#ccc;
`;

const FooterMenu = styled.View`
flex-direction:row;
justify-content:space-between;
padding:9px 0;
`;

const Btnfooter = styled.TouchableOpacity`
flex-direction:row
`;

const Icon = styled.View`
margin-right:6px;
`;

const Text = styled.Text`
font-size:14px;
color:#424040;
padding:2px;
`;

const Feed =()=>{
    return (
        <>
        <Container>
            <Header>
                <Row>
                    <Button activeOpacity={0.9}>
                        <Avatar source={require('../assets/user2.jpg')} />
                    </Button>
                    <View style={{paddingLeft:10}}>
                    <Button activeOpacity={0.9}><User>Natália Karen</User></Button>
                        <Row>
                            <Time>18 min</Time>
                            <Entypo name='dot-single' size={12} color='#747476' />
                            <Entypo name='globe' size={12} color='#747476' />
                        </Row>
                    </View>
                    
                </Row>
                <Button activeOpacity={0.9}>
                    <Entypo name='dots-three-horizontal' size={20} color='#747476' />
                </Button>
            </Header>
            <Post>
                 Viagem incrível para esse lugar, ansiosa já para voltar!!
            </Post>
            <Button activeOpacity={0.8}><Photo source={require('../assets/post1.jpg')}/></Button>
            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name='like1' size={12} color='#ffff' />
                        </IconCount>
                        <IconLove>
                            <AntDesign name='heart' size={12} color='#ffff' />
                        </IconLove>
                        <TextCount>17 pessoas curtiram</TextCount>
                    </Row>
                    <TextCount>3 comentários</TextCount>
                </FooterCount>
                <Divider/>
                <FooterMenu>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <AntDesign name='like2' size={20} color='#424040' />
                        </Icon>
                        <Text>Curtir</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                        </Icon>
                        <Text>Comentar</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                    <Icon>
                        <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Btnfooter>
                </FooterMenu>
            </Footer>
            <BottomdDvider/>
        </Container>




        <Container>
            <Header>
                <Row>
                    <Button activeOpacity={0.9}>
                        <Avatar source={require('../assets/user3.jpg')} />
                    </Button>
                    <View style={{paddingLeft:10}}>
                    <Button activeOpacity={0.9}><User>Júnior Coelho</User></Button>
                        <Row>
                            <Time>12 min</Time>
                            <Entypo name='dot-single' size={12} color='#747476' />
                            <Entypo name='globe' size={12} color='#747476' />
                        </Row>
                    </View>
                    
                </Row>
                <Button activeOpacity={0.9}>
                    <Entypo name='dots-three-horizontal' size={20} color='#747476' />
                </Button>
            </Header>
            <Post>
                 Hoje é dia de olhar o céu, logo logo chuva de meteoros!
            </Post>
            <Button activeOpacity={0.8}><Photo source={require('../assets/post2.jpg')}/></Button>
            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name='like1' size={12} color='#ffff' />
                        </IconCount>
                        <IconLove>
                            <AntDesign name='heart' size={12} color='#ffff' />
                        </IconLove>
                        <TextCount>233 pessoas curtiram</TextCount>
                    </Row>
                    <TextCount>3 comentários</TextCount>
                </FooterCount>
                <Divider/>
                <FooterMenu>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <AntDesign name='like2' size={20} color='#424040' />
                        </Icon>
                        <Text>Curtir</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                        </Icon>
                        <Text>Comentar</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                    <Icon>
                        <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Btnfooter>
                </FooterMenu>
            </Footer>
            <BottomdDvider/>
        </Container>

        <Container>
            <Header>
                <Row>
                    <Button activeOpacity={0.9}>
                        <Avatar source={require('../assets/user1.jpg')} />
                    </Button>
                    <View style={{paddingLeft:10}}>
                    <Button activeOpacity={0.9}><User>Antonela Santana</User></Button>
                        <Row>
                            <Time>há 3 horas</Time>
                            <Entypo name='dot-single' size={12} color='#747476' />
                            <Entypo name='globe' size={12} color='#747476' />
                        </Row>
                    </View>
                    
                </Row>
                <Button activeOpacity={0.9}>
                    <Entypo name='dots-three-horizontal' size={20} color='#747476' />
                </Button>
            </Header>
            <Post>
                 Não vejo a hora de conhecer esse lugar!
            </Post>
            <Button activeOpacity={0.8}><Photo source={require('../assets/post1.jpg')}/></Button>
            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name='like1' size={12} color='#ffff' />
                        </IconCount>
                        <IconLove>
                            <AntDesign name='heart' size={12} color='#ffff' />
                        </IconLove>
                        <TextCount>117 pessoas curtiram</TextCount>
                    </Row>
                    <TextCount>3 comentários</TextCount>
                </FooterCount>
                <Divider/>
                <FooterMenu>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <AntDesign name='like2' size={20} color='#424040' />
                        </Icon>
                        <Text>Curtir</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                        <Icon>
                            <MaterialCommunityIcons name='comment-outline' size={20} color='#424040' />
                        </Icon>
                        <Text>Comentar</Text>
                    </Btnfooter>
                    <Btnfooter activeOpacity={0.8}>
                    <Icon>
                        <MaterialCommunityIcons name='share-outline' size={20} color='#424040' />
                    </Icon>
                    <Text>Compartilhar</Text>
                </Btnfooter>
                </FooterMenu>
            </Footer>
            <BottomdDvider/>
        </Container>

        
        </>
    )
}

export default Feed;