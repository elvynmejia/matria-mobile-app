import { StatusBar } from "expo-status-bar";
import { Box, GluestackUIProvider, Text, Center } from "@gluestack-ui/themed";

import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import PayRequest from "./pages/PayRequest";
import CheckOut from "./pages/CheckOut";

const PayRequestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PayRequest"
        component={PayRequest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckOut}
        options={{ headerShown: false }}
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
            name="PayRequest"
            component={PayRequestNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Other"
            component={Other}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
