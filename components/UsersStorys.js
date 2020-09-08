import React from 'react'
import styled from 'styled-components/native'
import {ScrollView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

import Avatar from './Avatar'

const Container = styled.View`
width:100%;
height:192px;
align-items:center;
flex-direction:row;
padding-right:10px;
`;
const Button = styled.TouchableOpacity``;

const Card = styled.View`
width:105px;
height:170px;
position: relative;
margin-right:8px
`;

const CardStory = styled.Image`
width:100%;
height:170px;
border-radius:12px;
`;

const CardUser = styled.View`
position:absolute;
top:8px;
left:8px;
background:#fff;
border-radius:20px;
width:39px;
height:39px;
align-items:center;
justify-content:center;
`;

const CardFooter = styled.View`
width:100%;
position:absolute;
bottom:12px;
left:9px
`;

const Text = styled.Text`
font-size:12px;
font-weight:bold;
color:#fff;
text-shadow:1px 1px 1px rgba(0,0,0,0.4);
`;

const BottomdDvider = styled.View`
width:100%;
height:9px;
background:#ccc;
`;

const UsersStorys = () =>{
    return(
        <>
        <Container>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:11}}>
                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/user.jpg')}/>
                        <CardUser>
                            <AntDesign name='plus' size={24} color='#1777f2' />
                        </CardUser>
                        <CardFooter>
                            <Text>Criar um story</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/story2.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user2.jpg')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Natália Karen</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/story3.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user3.jpg')} story={false} />
                        </CardUser>
                        <CardFooter>
                            <Text>Júnior Coelho</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/story4.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user4.jpg')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Antônio Carvalho</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/story2.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user2.jpg')} story={false} />
                        </CardUser>
                        <CardFooter>
                            <Text>Natália Karen</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/story3.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user3.jpg')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Júnior Coelho</Text>
                        </CardFooter>
                    </Button>
                </Card>

                <Card>
                    <Button activeOpacity={0.8}>
                        <CardStory source={require('../assets/user1.jpg')}/>
                        <CardUser>
                            <Avatar source={require('../assets/user1.jpg')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Antonela Santana</Text>
                        </CardFooter>
                    </Button>
                </Card>

               
            </ScrollView>
        </Container>
        <BottomdDvider/>
        </>

    )

}

export default UsersStorys