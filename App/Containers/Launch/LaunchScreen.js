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
          <Text>Item layout</Text>
          <View style={[styles.container, {height: 200, justifyContent: 'space-around'}]}>
            <View style={itemStyles.leftTop}/>
            <View style={itemStyles.centerTop}/>
            <View style={itemStyles.rightTop}/>
          </View>

          {/*-------------*/}
          <Text>Linear layout - vertical</Text>
          <View style={styles.container}>
            <View style={linearLayoutStyles.block1}>
              <Text style={linearLayoutStyles.text}>Block1</Text>
            </View>
            <View style={linearLayoutStyles.block2}>
              <Text style={linearLayoutStyles.text}>Block2</Text>
            </View>
          </View>
          {/*-------------*/}
          <Text>Linear layout - horizontal</Text>
          <View style={[styles.container, {flexDirection: 'row'}]}>
            <View style={linearLayoutStyles.block3}>
              <Text style={linearLayoutStyles.text}>Block3</Text>
            </View>
            <View style={linearLayoutStyles.block4}>
              <Text style={linearLayoutStyles.text}>Block4</Text>
            </View>
          </View>

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: 'red'
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'red'
  }
});

const itemStyles = StyleSheet.create({
  leftTop: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    alignSelf: 'flex-start'
  },
  centerTop: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  rightTop: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    alignSelf: 'flex-end'
  }
});

const linearLayoutStyles = StyleSheet.create({
  block1: {
    height: 100,
    backgroundColor: 'red'
  },
  block2: {
    height: 100,
    backgroundColor: 'green'
  },
  block3: {
    height: 100,
    flex: 1,
    backgroundColor: 'red'
  },
  block4: {
    height: 100,
    flex: 2,
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  }

});

const relativeLayoutStyles = StyleSheet.create({





});
