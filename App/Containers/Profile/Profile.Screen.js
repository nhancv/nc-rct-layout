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
            <Text>Test data</Text>
          </Button>
          <Button
            onPress={() =>
              this.props.getUser(ProfileAction.userRequest('nhancv'))
            }>
            <Text>Fetch user</Text>
          </Button>

          {
            this.props.isFetching ?
              <Text>Fetching...</Text> :
              <View>
                <Text>Data: {this.props.data}</Text>
                {this.props.error ? <Text>Has error</Text> : null}
              </View>
          }

        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  let test = {
    isFetching: state.profile.isFetching,
    data: state.profile.data,
    error: state.profile.error,
  };
  console.log('test', test);
  return {
    isFetching: state.profile.isFetching,
    data: state.profile.data,
    error: state.profile.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: (request) => dispatch(request),
    getUser: (request) => dispatch(request)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
