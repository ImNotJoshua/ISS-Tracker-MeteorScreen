import React, { Component } from 'react';
import { Platform, SafeAreaView, Text, View,TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <SafeAreaView style = {styles.droidAreaView}></SafeAreaView>
                    <ImageBackground style = {styles.bgImage} source = {require("../assets/bg_image.png")}></ImageBackground>
                <Text style = {styles.titleText}>ISS Tracker App</Text>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("IssLocation")} style = {styles.routeCard}> 
                    <Text style =  {styles.routeText}>ISS Location</Text>
                    <Text style = {styles.KnowMore}> {"Know More"} </Text>
                    <Text style =  {styles.bgDigit}> 1 </Text>
                    <Image style = {styles.iconImage} source = {require("../assets/iss_icon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Meteors")} style = {styles.routeCard}>
                        <Text style = {styles.routeText}>Meteors</Text>
                        <Text style = {styles.KnowMore}> {"Know More"} </Text>
                        <Text style =  {styles.bgDigit}> 2 </Text>
                        <Image style = {styles.iconImage} source = {require("../assets/meteor_icon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Updates")} style = {styles.routeCard}>
                        <Text style = {styles.routeText}>Updates</Text>
                        <Text style = {styles.KnowMore}> {"Know More"} </Text>
                        <Text style =  {styles.bgDigit}> 3 </Text>
                        <Image style = {styles.iconImage} source = {require("../assets/bg_updates.jpg")}/>
                </TouchableOpacity>
            </View>

        )
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
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        margintTop: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 2
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    KnowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -8
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183,183,183,0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
})