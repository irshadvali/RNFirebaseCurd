//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import style from "./ListItemStyle"
import ListItemStyle from "./ListItemStyle"
import CheckBox from "./CheckBox"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { NavigationActions } from "react-navigation";
import * as firebase from "firebase";
export const goTolist = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: "ShowList" })]
});
class DetailsPage extends Component {

    constructor(props) {
        super(props);
        this.itemsRef = this.getRef().child('mainList');
        this.state = {
            title: "",
            details: "",
            dateString: "01 Jan 2018 at 15:53 PM",
        }
    }
    getRef() {
        return firebase.database().ref();
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            title: params.listObject.title,
            details:params.listObject.details
        });
    }




    // AddNewItem = () => {
    //     this.SubmitForm();
    // }

    // handleTitle = text => {
    //     this.setState({ title: text });
    // };

    // handleDetails = text => {
    //     this.setState({ details: text });
    // };


    render() {
        return (
            <View style={styles.container}>

                <Text style={{ font: 25, color: "#333" }}>{this.shouldComponentUpdate.title}</Text>
                <Text style={{ font: 15, color: "#333" }}>{this.state.details}</Text>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
});

//make this component available to the app
export default DetailsPage;
