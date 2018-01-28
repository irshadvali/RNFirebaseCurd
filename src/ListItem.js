import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import ListItemStyle from "../src/ListItemStyle";
import CheckBox from './CheckBox'

class ListItem extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      likechecked: false,
      favchecked: false
    }
  }

  componentWillMount(){
    
   if(this.props.dataResult.like==1){
    this.setState({
      likechecked:true
    })
   } else{
    this.setState({
      likechecked:false
    })
   }
   if(this.props.dataResult.favourite==1){
    this.setState({
      favchecked:true
    })
   } else{
    this.setState({
      favchecked:false
    })
   }

  }
  componentDidMount(){
    if(this.props.dataResult.like==1){
      this.setState({
        likechecked:true
      })
     } else{
      this.setState({
        likechecked:false
      })
     }
     if(this.props.dataResult.favourite==1){
      this.setState({
        favchecked:true
      })
     } else{
      this.setState({
        favchecked:false
      })
     } 
  }
  handleOnChangeLike(val) {
    this.setState({ likechecked: val });
    alert(val)
  }

  handleOnChangeFav(val) {
    this.setState({ favchecked: val });
    alert(val)
  }
  render() {
    return (
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
        <Text style={ListItemStyle.timeText}> {this.props.dataResult.dateString} </Text>
        <View style={ListItemStyle.divider}></View>
      </View>
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