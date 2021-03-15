import { StatusBar as StatusBarExpo } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { theme } from "./src/infra/index";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";
import { SettingScreen } from "./src/features/settings/screens/settings.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ color }) => <Icon name={iconName} size={18} color={color} />,
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator headerMode="none" screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBarExpo style="auto" />
    </>
  );
}
