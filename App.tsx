import { StatusBar } from "expo-status-bar";
import {
  Box,
  GluestackUIProvider,
  Text,
  Center
} from "@gluestack-ui/themed";

import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import PayRequest from "./pages/PayRequest";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";

const PayRequestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PayRequest"
        component={PayRequest}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckOut}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Other = () => {
  return (
    <Center>
      <Box justifyContent="center" alignItems="center" alignContent="center">
        <Text>Thi is just another screen</Text>
      </Box>
    </Center>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Tab.Navigator>
          <Tab.Screen
            name="Inicio"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Aprendo"
            component={Other}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="school"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Pagar/Cobrar"
            component={PayRequestNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cash" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Other"
            component={Other}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="help" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
