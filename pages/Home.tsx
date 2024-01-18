import {
  Box,
  Text,
  FlatList,
  HStack,
  VStack,
  Heading,
} from "@gluestack-ui/themed";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home({ navigation }: { navigation: any }) {
  const data = [
    {
      id: "mi-salud",
      name: "Mi Salud",
      icon: "heart",
    },
    {
      id: "mi-dinero",
      name: "Mi Dinero",
      icon: "cash",
    },
    {
      id: "mi-identidad",
      name: "Mi Identidad",
      icon: "passport",
    },
    {
      id: "mis-logros",
      name: "Mis Logros",
      icon: "trophy",
    },
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
              <MaterialCommunityIcons name={item.icon} size={20} />
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
}
