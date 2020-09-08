import React from 'react';
import styled from 'styled-components/native'
import {StatusBar, ScrollView} from 'react-native'
import AppBar from './components/AppBar'
import ToolBar from './components/ToolBar'
import UsersStorys from './components/UsersStorys'
import Feed from './components/Feed'
import Menu from './components/Menu'

const Container = styled.SafeAreaView`
flex:1
`;


const App  = () =>{
  return (
    <>
    <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
    <Container>
      <ScrollView>
        <AppBar/>
        <Menu/>
        <ToolBar/>
        <UsersStorys/>
        <Feed/>
      </ScrollView>
    </Container>

    </>
  
  )
}

export default App