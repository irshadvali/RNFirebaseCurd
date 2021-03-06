import React, { Component } from "react";
import { View, Text, Image,TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import ListItemStyle from "../src/ListItemStyle";
import CheckBox from './CheckBox'
import * as firebase from "firebase";
import { NavigationActions, StackNavigator } from "react-navigation";
class ListItem extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child('mainList');
    this.state = {
      likechecked: false,
      favchecked: false
    }
  }
  getRef() {
    return firebase.database().ref();
  }
  componentWillMount() {

    if (this.props.dataResult.like == 1) {
      this.setState({
        likechecked: true
      })
    } else {
      this.setState({
        likechecked: false
      })
    }
    if (this.props.dataResult.favourite == 1) {
      this.setState({
        favchecked: true
      })
    } else {
      this.setState({
        favchecked: false
      })
    }

  }
  componentDidMount() {
    if (this.props.dataResult.like == 1) {
      this.setState({
        likechecked: true
      })
    } else {
      this.setState({
        likechecked: false
      })
    }
    if (this.props.dataResult.favourite == 1) {
      this.setState({
        favchecked: true
      })
    } else {
      this.setState({
        favchecked: false
      })
    }
  }
  deleteIcon =()=>{
    this.itemsRef.child(this.props.dataResult.id).remove();
  }

  handleOnChangeLike(val) {
    // this.itemsRef.child(this.props.dataResult.id).remove();
    this.setState({ likechecked: val });
    if (val == true) {
      this.itemsRef.child(this.props.dataResult.id).update({like:0})
      this.setState({
        likechecked:false
      })
    }
    else {
      this.itemsRef.child(this.props.dataResult.id).update({like:1}) 
      this.setState({
        likechecked:true
      })  
    }
  }

  handleOnChangeFav(val) {
    this.setState({ favchecked: val });
    // alert(val)
    if (val == true) {
      this.itemsRef.child(this.props.dataResult.id).update({favourite:0})
      this.setState({
        favchecked:false
      })
    }
    else {
      this.itemsRef.child(this.props.dataResult.id).update({favourite:1}) 
      this.setState({
        favchecked:true
      })  
    }
  }




  // showData  = () => {
  //   //alert("hi")
  //   const { params } = this.props.navigation.state;
  //   navigate("DetailsPage", { listObject: this.props.dataResult });
  // }

  render() {
    return (
      <TouchableHighlight
      // onPress={()=>this.showData()}
      >
      <View style={ListItemStyle.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={ListItemStyle.titleText}
            numberOfLines={1} ellipsizeMode={'tail'}> {this.props.dataResult.title} </Text>
          <View
            style={{ flexDirection: 'row' }}
          >
            <CheckBox
              checkedImage={require("./image/star.png")}
              uncheckedImage={require("./image/starunselected.png")}
              onChange={this.handleOnChangeFav.bind(this)}
              checkboxStyle={ListItemStyle.smallCheckbox}
              containerStyle={ListItemStyle.checkContainer}
              checked={this.state.favchecked}
            />
            <CheckBox
              checkedImage={require("./image/like.png")}
              uncheckedImage={require("./image/likeunselected.png")}
              onChange={this.handleOnChangeLike.bind(this)}
              checkboxStyle={ListItemStyle.smallCheckbox}
              containerStyle={ListItemStyle.checkContainer}
              checked={this.state.likechecked}
            />
          </View>
        </View>
        <Text style={ListItemStyle.detailsText}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        > {this.props.dataResult.details} </Text>
        <View
          style={{ flexDirection: 'row',justifyContent: 'space-between' }}
        >
          <Text style={ListItemStyle.timeText}> {this.props.dataResult.dateString} </Text>
          <TouchableHighlight
           style={{width:20,height:20}}
           onPress={() => this.deleteIcon()}
          >
          <Image
          source={require("./image/delete.png")}
          
          />
           </TouchableHighlight>
        </View>
        <View style={ListItemStyle.divider}></View>
      </View>
       </TouchableHighlight>
    );
  }
}
export default ListItem;

ListItem.propTypes = {
  dataResult: PropTypes.object
};

ListItem.defaultProps = {
  dataResult: null
};