import React, {} from 'react';
import {NewsState} from "./src/context/news/NewsState";
import {MainLayout} from "./src/MainLayout";
import {ScreenState} from "./src/context/screen/screenState";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AddNews} from "./src/components/AddNews";
const Stack = createStackNavigator();
export default function App() {

  return (
      <ScreenState>
          <NewsState>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                      <Stack.Screen  name="NEWS" component={MainLayout} />
                      <Stack.Screen   name="AdminPanel" component={AddNews } />
                  </Stack.Navigator>
              </NavigationContainer>
          </NewsState>
      </ScreenState>
  );
}



