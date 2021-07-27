import axios from 'axios';
import React, { Component } from 'react';
import { Text, View, ImageBackground, Stylesheet, StatusBar, SafeAreaView, Platform, Alert } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component {
    constructor() {
        super()
        this.state={location:{}}
    }
    componentDidMount() {
        this.getISSLocation()
    }
    getISSLocation=()=>{
            axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response=>{this.setState({
                location: response.data
            })
            .catch(error=>{Alert.alert(error.message)})
        })
    }
    render() {
        if(Object.keys(this.state.location).length===0){
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Loading</Text>
                    </View>
        }   
        else{
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <SafeAreaView style={styles.droidAreaView}/>
                        <ImageBackground style={styles.bgImage} source={require('../assets/iss_bg.jpg')}>
                            <View style={styles.titleBar}>
                                <Text style={styles.titleText}>
                                    ISS Location
                                </Text>
                            </View>
                            <View style={styles.mapContainer}>
                            <MapView style={styles.map}
                            region={{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude,
                                latitudeDelta: 100,
                                longitudeDelta: 100,
                            }}
                            >
                                <Marker coordinate={{ latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude}}>
                                    <Image style={styles.iconImage} source={require('../assets/iss_icon.png')}></Image>
                                </Marker>
                            </MapView>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoText}>
                                    latitude:{this.state.location.latitude}
                                </Text>
                                <Text style={styles.infoText}>
                                    longitude:{this.state.location.longitude}
                                </Text>
                                <Text style={styles.infoText}>
                                    altitude:{this.state.location.altitude}
                                </Text>
                                <Text style={styles.infoText}>
                                    velocity:{this.state.location.velocity}
                                </Text>
                            </View>
                        </ImageBackground>
            </View>
        )
    }
}
}
const styles = StyleSheet.create({
    droidAreaView: {
        marginTop: Platform.OS==="android"? StatusBar.currentHeight: 0 
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -8
    },
    titleBar: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapContainer: {
        flex: 0.6
    },
    map: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 30,
        marginTop: -10
    },
    infoText: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold'
    },
})