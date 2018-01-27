//import liraries
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    ListView
} from 'react-native';
import * as firebase from "firebase";
// create a component
//var Firebase = require('firebase');

//var myFirebaseRef;
const firebaseConfig = {
    apiKey: "AIzaSyDAyjiQoy7ogBnqI_Ae3gD5FJn7q3sjNas",
    authDomain: "fbpractice-38d8c.firebaseapp.com",
    databaseURL: "https://fbpractice-38d8c.firebaseio.com",
    projectId: "fbpractice-38d8c",
    storageBucket: "fbpractice-38d8c.appspot.com",

}
const firebaseApp = firebase.initializeApp(firebaseConfig);
class ShowList extends Component {
    constructor(props) {
        super(props);
        itemDataSource:[];
        let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
        this.setState({
            itemDataSource: ds
        })
        this.itemsRef = this.getRef().child('mainList');
    }

    getRef() {
        return firebaseApp.database().ref();
    }


    componentWillMount() {
        this.getItems(this.itemsRef);
    }

    componentDidMount() {
        this.getItems(this.itemsRef);
    }
    getItems(itemsRef) {

        itemsRef.on('value',(snap)=>{
            let items = [];
          snap.forEach((child) =>{
                items.push({
                    title:child.val().title
                });
            });
            console.log(items)
            this.setState({
                itemDataSource:this.state.itemDataSource.cloneWithRows(items)
            })
            console.log("itemDataSource")
            console.log(itemDataSource)
        });
        
    }



    renderRow(rowData) {
        return (
            <TouchableHighlight
                underlayColor='#dddddd'
                onPress={() => this.removeTodo(rowData)}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.todoText}>{rowData.title}</Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <View style={styles.appContainer}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        My Todos
        </Text>
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput style={styles.input} />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.addTodo()}
                        underlayColor='#dddddd'>
                        <Text style={styles.btnText}>Add!</Text>
                    </TouchableHighlight>
                </View>
                {/* <ListView
                    dataSource={this.state.itemDataSource}
                    renderRow={this.renderRow.bind(this)} /> */}
            </View>
        );
    }
}



// define your styles
const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    titleView: {
        backgroundColor: '#48afdb',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    },
    inputcontainer: {
        marginTop: 5,
        padding: 10,
        flexDirection: 'row'
    },
    button: {
        height: 36,
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#48afdb',
        justifyContent: 'center',
        color: '#FFFFFF',
        borderRadius: 4,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 6,
    },
    input: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48afdb',
        borderRadius: 4,
        color: '#48BBEC'
    },
    row: {
        flexDirection: 'row',
        padding: 12,
        height: 44
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    todoText: {
        flex: 1,
    }
});

//make this component available to the app
export default ShowList;
