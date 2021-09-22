import React, { Component } from 'react';
import { StyleSheet, Text, PanResponder, Dimensions, Image, Animated } from 'react-native';

const Foods = [
    { id: "1", uri: require('../assets/pic1.jpeg') },
    { id: "2", uri: require('../assets/pic2.jpeg') },
    { id: "3", uri: require('../assets/pic3.jpeg') },
    { id: "4", uri: require('../assets/pic4.jpeg') },
    { id: "5", uri: require('../assets/pic5.jpeg') },
  ];

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class SwipableImageView extends Component {
    constructor() {
        super()
        this.position = new Animated.ValueXY()
        this.state = {
           currentIndex: 0
        }
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderMove: (evt, gestureState) => {
             this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > 120) {
              Animated.spring(this.position, {
                toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            } else if (gestureState.dx < -120) {
              Animated.spring(this.position, {
                toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            }
            else {
                Animated.spring(this.position, {
                   toValue: { x: 0, y: 0 },
                   friction: 4
                   }).start()
            }
        }
        })
    }

    
    

    renderFoods = () => {
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
              rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
         }

         this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
         })

         this.nopeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
         })

         this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
         })

         this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
         })

        return Foods.map((item, i) => {
            if (i < this.state.currentIndex) {
              return null;
            } else if (i == this.state.currentIndex) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={i}
                        style={[
                        this.rotateAndTranslate,
                        {
                            height: SCREEN_HEIGHT - 120,
                            width: SCREEN_WIDTH,
                            padding: 10,
                            position: "absolute"
                        }
                        ]}
                    >
                        <Animated.View
                            style={{
                            opacity: this.likeOpacity,
                            transform: [{ rotate: "-30deg" }],
                            position: "absolute",
                            top: 50,
                            left: 40,
                            zIndex: 1000
                            }}
                        >
                            <Text
                            style={{
                                borderWidth: 1,
                                borderColor: "green",
                                color: "green",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 10
                            }}
                            >
                            LIKE
                            </Text>
                        </Animated.View>
                        <Animated.View
                            style={{ 
                            opacity: this.nopeOpacity,
                            transform: [{ rotate: "30deg" }],
                            position: "absolute",
                            top: 50,
                            right: 40,
                            zIndex: 1000
                            }}
                        >
                            <Text
                            style={{
                                borderWidth: 1,
                                borderColor: "red",
                                color: "red",
                                fontSize: 32,
                                fontWeight: "800",
                                padding: 10
                            }}
                            >
                            NOPE
                            </Text>
                        </Animated.View>
                        <Image
                        style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: "cover",
                            borderRadius: 20
                        }}
                        source={item.uri}
                        />
                    </Animated.View>
              );
            } else {
              return (
                <Animated.View
                    key={item.id} style={[{
                    opacity: this.nextCardOpacity,
                    transform: [{ scale: this.nextCardScale }],
                    height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                    }]
                }>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 20
                    }}
                    source={item.uri}
                  />
                </Animated.View>
              );
            }
          }).reverse();
     };

    render() {
        return (
            this.renderFoods()
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 100,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 20,
      textAlign: 'center',
    }
  });

export default SwipableImageView;