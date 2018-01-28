
import React, { Component } from 'react';
import ShowList from './ShowList';
import AddNewItem from "./AddNewItem";
import dataResult from "./DetailsPage"
import { StackNavigator, TabNavigator } from "react-navigation";
import {
    AppRegistry,
} from "react-native";

export const LoadingScreen = StackNavigator({
    ShowList: { screen: ShowList },
    AddNewItem: { screen: AddNewItem },
    dataResult: { screen: dataResult },
});

export default LoadingScreen;