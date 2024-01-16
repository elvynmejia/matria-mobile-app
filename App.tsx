import { StatusBar } from "expo-status-bar";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import PayRequest from "./pages/PayRequest";
import CheckOut from "./pages/CheckOut";
export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator>
          <Stack.Screen
            name="PayRequest"
            component={PayRequest}
            options={{ title: "Pay/Request" }}
          />
          <Stack.Screen name="Checkout" component={CheckOut} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
