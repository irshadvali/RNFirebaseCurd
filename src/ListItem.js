import React, { Component } from "react";
import { View, Text } from "react-native";
import ListItemStyles from "../src/ListItemStyle";
import PropTypes from "prop-types";
import ListItemStyle from "../src/ListItemStyle";

class ListItem extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={ListItemStyles.container}>
   
        <Text style={ListItemStyle.titleText}> {this.props.dataResult.title} </Text>
        <Text style={ListItemStyle.detailsText}
         numberOfLines={1}
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
    dataResult:null
};