import { StatusBar } from "expo-status-bar";
import {
  Box,
  GluestackUIProvider,
  Text,
  Center,
  FlatList,
  HStack,
  VStack,
  Heading
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

const Home = ({ navigation }: { navigation: any }) => {

  const data = [
    {
      id: "mi-salud",
      name: "Mi Salud",
      icon: "heart"
    },
    {
      id: "mi-dinero",
      name: "Mi Dinero",
      icon: "cash"
    },
    {
      id: "mi-identidad",
      name: "Mi Identidad",
      icon: "passport"
    },
    {
      id: "mis-logros",
      name: "Mis Logros",
      icon: "trophy"
    }
  ];

  return (
    <Box py="$10">
      <Heading size="xl" pl="$4">
        MATRIA
      </Heading>
      <Heading size="xl" pl="$4" pb="$3" sub color="$coolGray600">
        CONMIGO
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }: { item: any }) => (
          <Box
            $base-pl={0}
            $base-pr={0}
            $sm-pl="$4"
            $sm-pr="$5"
            py="$2"
            ml={20}
          >
            <HStack space="md" justifyContent="flex-start" alignItems="center">
              <MaterialCommunityIcons name={item.icon} size={20}/>
              <VStack>
                <Text color="$coolGray600" $dark-color="$warmGray200" size="xl">
                  {item.name}
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Box>
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
