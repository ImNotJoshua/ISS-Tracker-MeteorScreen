import React, { Component } from 'react';
import { Alert, Text, View, Stylesheet, SafeAreaView, Platform, StatusBar, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            meteors:{}
        }  
      }
      componentDidMount(){
          this.getMeteor()
      }
    getMeteor=()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=z86yRhM2ujN4Bd8fZxe1wyaV4XE5dAsXsnXJbknd")
        .then(response=>{
            this.setState(
                {
                    meteors:response.data.near_earth_objects
                              }
            )
            .catch(error=>{Alert.alert(error.message)})
        })
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item})=>{
        let meteor=item
        let bgImage, speed, size
        if(meteor.threat_score<=30){
            bgImage=require("../assets/meteor_bg1.png");
            speed=require("../assets/meteor_speed3.gif");
            size=100;
        }
        else if(meteor.threat_score<=75){
            bgImage=require("../assets/meteor_bg2.png");
            speed=require("../assets/meteor_speed3.gif");
            size=150;
        }
        else{
            bgImage=require("../assets/meteor_bg3.png");
            speed=require("../assets/meteor_speed3.gif");
            size=200;
        }
        return(
            <View>
                <ImageBackground>
                    <View>
                        <Image>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </Image>
                    </View>
                </ImageBackground>
            </View>
        )
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
            let meteorArray=object.keys(this.state.meteors).map(meteor_date=>{
                return this.state.meteors[meteor_date]
            })
            let meteors=[].concat.apply([],meteorArray)
            meteors.forEach(function(element){
                let diameter=(element.estimated_diameter.kilometers.estimated_diameter_min+
                element.estimated_diameter.kilometers.estimated_diameter_max)/2
                let threatScore=(diameter/element.close_apporach_data[0].miss_distance.kilometers)*1000000000
                element.threat_score=threatScore
                        })
        meteors.sort(function(a,b){
            return b.threat_score-a.threat_score
        })                
        meteros=meteors.slice(0,5)
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <SafeAreaView style={styles.droidAreaView}></SafeAreaView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={meteors}
                        renderItem={this.renderItem}
                        horizontal={true}
                    ></FlatList>
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




























































































































































































































































































































































































































































































































































































































