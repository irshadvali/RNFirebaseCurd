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
class AddNewItem extends Component {

    constructor(props) {
        super(props);
        this.itemsRef = this.getRef().child('mainList');
        this.state = {
            likechecked: false,
            favchecked: false,
            types1: [{ label: 'Poem', value: 0 }, { label: 'Story', value: 1 }],
            title: "",
            details: "",
            dateString: "01 Jan 2018 at 15:53 PM",
            like: 0,
            favourite: 0,
            poem: 1,
            story: 0
        }
    }
    getRef() {
        return firebase.database().ref();
    }
    SubmitForm() {
        if (this.state.title.length == 0) {
            alert("Please enter the Title");
            return;
        } else if (this.state.details.length == 0) {
            alert("Please enter the few details");
            return;
        }
        else {

            var newPostRef = this.itemsRef.push();
            newPostRef.set({
                id: newPostRef.key,
                title: this.state.title,
                details: this.state.details,
                dateString: this.state.dateString,
                like: this.state.like,
                favourite: this.state.favourite,
                poem: this.state.poem,
                story: this.state.story,
                createdFlag:0
            });
            var { navigate } = this.props.navigation;
           // navigate("ShowList", {});
           this.props.navigation.dispatch(goTolist);
        }

    }

    handleOnChangeLike(val) {
        this.setState({ likechecked: val });
        if (val == true) {
            this.setState({
                like: 1
            })
        }
        else {
            this.setState({
                like: 0
            })
        }
    }

    handleOnChangeFav(val) {
        this.setState({ favchecked: val });
        // alert(val)

        if (val == true) {
            this.setState({
                favourite: 1
            })
        }
        else {
            this.setState({
                favourite: 0
            })
        }
    }
    AddNewItem = () => {
        this.SubmitForm();
    }

    handleTitle = text => {
        this.setState({ title: text });
    };

    handleDetails = text => {
        this.setState({ details: text });
    };

    poemStory = (value) => {
        this.setState({ value: value })
        if (value == 0) {
            this.setState({
                poem: 1,
                story: 0
            })
        }
        else {
            this.setState({
                poem: 0,
                story: 1
            })
        }
    };
    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={style.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Title"
                    onChangeText={this.handleTitle}
                />
                <TextInput
                    style={style.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Details"
                    onChangeText={this.handleDetails}
                />
                <View style={{ marginTop: 20 }}></View>

                <CheckBox
                    label={"Favourite"}
                    checkedImage={require("./image/star.png")}
                    uncheckedImage={require("./image/starunselected.png")}
                    onChange={this.handleOnChangeFav.bind(this)}
                    checkboxStyle={ListItemStyle.smallCheckbox}
                    containerStyle={ListItemStyle.checkContainer}

                />
                <View style={{ marginTop: 10 }}></View>
                <CheckBox
                    label={"like"}
                    checkedImage={require("./image/like.png")}
                    uncheckedImage={require("./image/likeunselected.png")}
                    onChange={this.handleOnChangeLike.bind(this)}
                    checkboxStyle={ListItemStyle.smallCheckbox}
                    containerStyle={ListItemStyle.checkContainer}

                />

                <View style={{ marginTop: 10, flex: 1, flexDirection: 'row' }}>

                    <RadioForm
                        radio_props={this.state.types1}
                        initial={0}
                        formHorizontal={false}
                        labelHorizontal={true}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => this.poemStory(value)}
                    />
                </View>

                <TouchableHighlight style={{ height: 50, justifyContent: 'center', width: "100%", backgroundColor: "#333" }}
                    onPress={() => this.AddNewItem()}>
                    <Text style={{ textAlign: 'center', color: "#fff" }}> CLICK TO SAVE</Text>
                </TouchableHighlight>
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
export default AddNewItem;
