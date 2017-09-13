import React, {Component} from 'react'
import {Dimensions, ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base'

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
                    onPress={() =>
                      this.props.navigation.goBack()
                    }>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
          <Title>ProfileScreen</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
        </Content>
      </Container>
    )
  }
}
