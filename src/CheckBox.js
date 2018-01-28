
import React, { Component } from "react";

import PropTypes from "prop-types";
import styles from "./CheckboxStyles";
import { Image, Text, View, TouchableHighlight } from "react-native";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      internalChecked: false,
      isDisabled: props.disabled
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.onChange && typeof this.props.checked === "boolean") {
      this.props.onChange(this.props.checked);
    } else {
      let internalChecked = this.state.internalChecked;
      let newState = !internalChecked;

      if (this.props.onChange) {
        this.props.onChange(newState);
      }
      this.setState({
        internalChecked: newState
      });
    }
  }
  componentWillMount() {
    this.setState(this.baseState);
  }

  render() {
    let container = (
      <View style={this.props.containerStyle || styles.checkbocContainer}>
        <Image
          style={this.props.checkboxStyle || styles.checkbox}
          source={source}
        />
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>
            {this.props.label}
          </Text>
        </View>
      </View>
    );

    let source;

    if (typeof this.props.checked === "boolean") {
      source = this.props.checked
        ? this.props.checkedImage
        : this.props.uncheckedImage;
    } else {
      source = this.state.internalChecked
        ? this.props.checkedImage
        : this.props.uncheckedImage;
    }

    if (this.props.labelBefore) {
      container = (
        <View
          style={
            this.props.containerStyle || [
              styles.container,
              styles.flexContainer
            ]
          }
        >
          {this.props.label ? (
            <View style={styles.labelContainer}>
              <Text
                numberOfLines={this.props.labelLines}
                style={[styles.label, this.props.labelStyle]}
              >
                {this.props.label}
              </Text>
            </View>
          ) : (
            <View />
          )}
          <Image
            style={[styles.checkbox, this.props.checkboxStyle]}
            source={source}
          />
        </View>
      );
    } else {
      container = (
        <View style={[styles.container, this.props.containerStyle]}>
          <Image
            style={[styles.checkbox, this.props.checkboxStyle]}
            source={source}
          />
          {this.props.label ? (
            <View style={styles.labelContainer}>
              <Text
                numberOfLines={this.props.labelLines}
                style={[styles.label, this.props.labelStyle]}
              >
                {this.props.label}
              </Text>
            </View>
          ) : (
            <View />
          )}
        </View>
      );
    }

    return (
      <TouchableHighlight
        onPress={this.onChange}
        underlayColor={this.props.underlayColor}
        style={styles.flexContainer}
        disabled={this.state.isDisabled}
      >
        {container}
      </TouchableHighlight>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  labelBefore: PropTypes.bool,
  labelStyle: PropTypes.any,
  labelLines: PropTypes.number,
  checkboxStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  checked: PropTypes.bool,
  checkedImage: PropTypes.number,
  uncheckedImage: PropTypes.number,
  underlayColor: PropTypes.string,
  onChange: PropTypes.func
};

CheckBox.defaultProps = {
  label: "",
  labelLines: 1,
  labelBefore: false,
  checked: null,
  checkedImage: null,
  uncheckedImage: null,
  underlayColor: "transparent"
};

export default CheckBox;