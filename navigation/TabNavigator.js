import React from 'react';
import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import History from '../components/History';
import AddEntry from '../components/AddEntry';
import { purple, white } from '../utils/colors';

// export default
const android = createMaterialTopTabNavigator(
  {
    History: History,
    AddEntry: AddEntry
  },
  {
    navigationOptions: {
      header: null
    },
    defaultNavigationOptions: {
      bounces: true
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 70,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0,0,0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      tabStyle: {
        marginTop: 5
      },
      showIcon: true
    }
  }
);

const ios = createBottomTabNavigator(
  {
    History: History,
    AddEntry: AddEntry
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0,0,0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default (Platform.OS === 'ios' ? ios : android);
