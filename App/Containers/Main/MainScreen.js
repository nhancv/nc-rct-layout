import React, {Component} from 'react'
import {Dimensions, ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base'

import MainStyles from './MainStyles'

export default class MainScreen extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
          <Title>MainScreen</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>

          <View style={MainStyles.container}>
            <View style={MainStyles.emptyVertical}/>
            <Button style={MainStyles.center}
                    onPress={() =>
                      this.props.navigation.navigate('LayoutScreen', {})
                    }>
              <Text> LayoutScreen </Text>
            </Button>
            <View style={MainStyles.emptyVertical}/>
            <Button style={MainStyles.center}
                    onPress={() =>
                      this.props.navigation.navigate('ProfileScreen', {})
                    }>
              <Text> ProfileScreen </Text>
            </Button>
          </View>

        </Content>
      </Container>
    )
  }
}
