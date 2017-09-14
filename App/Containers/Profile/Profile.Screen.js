import React, {Component} from 'react'
import {Dimensions, ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base'

import {connect} from 'react-redux'
import {ProfileAction} from './Profile.Action'

class ProfileScreen extends Component {
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
          <Button
            onPress={() =>
              this.props.getData(ProfileAction.request('hello'))
            }>
            <Text>Fetch data</Text>
          </Button>
          <Text>{this.props.data}</Text>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.profile.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (request) => dispatch(request)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
