
import React, { Component } from 'react';
import ShowList from './ShowList';
import AddNewItem from "./AddNewItem";
import { StackNavigator, TabNavigator } from "react-navigation";
import {
  AppRegistry,
} from "react-native";

export const LoadingScreen = StackNavigator({
    ShowList: { screen: ShowList },
    AddNewItem: { screen: AddNewItem },
});

export default LoadingScreen;