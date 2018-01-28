//import liraries
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    ListView,
    ActivityIndicator,
    FlatList
} from 'react-native';
import * as firebase from "firebase";
import ListItem from "./ListItem"
// create a component
//var Firebase = require('firebase');
let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
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
        this.itemsRef = this.getRef().child('mainList');
        this.state = {
            itemDataSource: []
        }
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

        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().title,
                    details:child.val().details,
                    dateString:child.val().dateString,
                    like:child.val().like,
                    favourite:child.val().favourite,
                    poem:child.val().poem,
                    story:child.val().story,
                    createdFlag:child.val().createdFlag,
                    id:child.val().id
                });
            });

            this.setState({
                itemDataSource: items
            })



        });

    }

    AddNewItem = () => {
        var { navigate } = this.props.navigation;
        navigate("AddNewItem", {});
      };

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
        if (this.state.itemDataSource) {
            return (
                <View style={styles.appContainer}>
                <View style={{height:50,backgroundColor:"#e6e6e6"}}>

                <Text style={{color:"#333",fontWeight:"bold", textAlign:"center",marginTop:22}}>NOTELY</Text>
                </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={this.state.itemDataSource}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) => 
                                <ListItem
                                dataResult={item}
                                />
                                 
                                }
                            />

                            {/* <ListView
                        dataSource={ds.cloneWithRows(this.state.itemDataSource)}
                        renderRow={this.renderRow.bind(this)} /> */}
                        </View>
                        <TouchableHighlight style={[styles.footer,{justifyContent:'center'}]}
                        
                        onPress={this.AddNewItem}>
                       <Text style={{textAlign:'center'}}> CLICK TO ADD NEW ITEM</Text>
                        </TouchableHighlight>
                      
                    </View>
                </View>
            );
        }
        else {
            return (<ActivityIndicator />)
        }


    }
}



// define your styles
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
    },
    footer: {
        flex: .10,
        width: "100%",
        backgroundColor: "#777777"
    },
    listContainer: {
        flex: .90,
        width: "100%",
        backgroundColor: "#e6e6e6"
    },
    titleView: {
        backgroundColor: '#48afdb',
        height: 50,
        marginTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#d00000"

    },
    titleText: {
        width: "100%",
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    },
    inputcontainer: {
        marginTop: 25,
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
        width: "100%",
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
        color: "#333"
    }
});

//make this component available to the app
export default ShowList;
