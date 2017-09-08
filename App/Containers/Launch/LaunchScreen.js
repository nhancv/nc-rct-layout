import React, {Component} from 'react'
import {ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base'

export default class LaunchScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Right>
        </Header>
        <Content>

          {/*-------------*/}
          <Text>Linear layout</Text>

          <View style={linearLayoutStyles.container}>
            <View style={linearLayoutStyles.header}>
              <Text style={linearLayoutStyles.text}>200X100</Text>
            </View>
            <View style={linearLayoutStyles.main}>
              <View  style={linearLayoutStyles.mainContent}>
                <Text style={linearLayoutStyles.text}>100X100</Text>
              </View>
            </View>
            <View style={linearLayoutStyles.footer}>
              <Text style={linearLayoutStyles.text}>200X100</Text>
            </View>
          </View>

          {/*-------------*/}
          <Text>Relative layout</Text>



        </Content>
      </Container>
    )
  }
}

const linearLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    width: 200,
    backgroundColor: 'red'
  },
  main: {
    height: 200,
    width: 200,
    padding: 25,
    borderWidth: 25,
    borderColor: 'black',
    margin: 25,
    backgroundColor: 'blue'
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  footer: {
    height: 100,
    width: 200,
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  }

});

