import React, {Component} from 'react'
import {Dimensions, ScrollView, Text, Image, View, StyleSheet} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content} from 'native-base'

export default class LaunchScreen extends Component {
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
          <Title>LayoutScreen</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Right>
        </Header>
        <Content>

          {/*-------------*/}
          <Text>Relative layout</Text>
          <View style={[styles.container, {height: 60}]}>
            <View style={relativeLayoutStyles.topLeft}/>
            <View style={relativeLayoutStyles.topCenter}/>
            <View style={relativeLayoutStyles.topRight}/>
          </View>

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
            <View style={linearLayoutStyles.box1}>
              <Text style={linearLayoutStyles.text}>Block1</Text>
            </View>
            <View style={linearLayoutStyles.box2}>
              <Text style={linearLayoutStyles.text}>Block2</Text>
            </View>
          </View>
          {/*-------------*/}
          <Text>Linear layout - horizontal</Text>
          <View style={[styles.container, {flexDirection: 'row'}]}>
            <View style={linearLayoutStyles.box3}>
              <Text style={linearLayoutStyles.text}>Block3</Text>
            </View>
            <View style={linearLayoutStyles.box4}>
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
  box1: {
    height: 100,
    backgroundColor: 'red'
  },
  box2: {
    height: 100,
    backgroundColor: 'green'
  },
  box3: {
    height: 100,
    flex: 1,
    backgroundColor: 'red'
  },
  box4: {
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

  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  topCenter: {
    position: 'absolute',
    top: 0,
    left: Dimensions.get('window').width/2 - 25,
    width: 50,
    height: 50,
    margin: 'auto',
    backgroundColor: 'blue'
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'green'
  },

});
