import React from "react";
import {  createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/search/SearchScreen";
import EmployeeScreen from "../screens/employee/EmployeeScreen";
const BottomTabNavigator = () => {
 
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="EmployeeScreen" component={EmployeeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
