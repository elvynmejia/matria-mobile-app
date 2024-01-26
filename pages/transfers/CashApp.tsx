import {
  Box,
  HStack,
  Text,
  Pressable,
  ButtonGroup,
  Button,
  ButtonText,
  Center,
  VStack,
  Heading,
  FlatList,
  AvatarImage,
  Avatar,
} from "@gluestack-ui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useState } from "react";

export default function CashApp({
  navigation,
  route,
}: {
  route: any;
  navigation: any;
}) {
  const [account, setAccount] = useState<string | null>("USD");

  const selectAccount = (selectedAccount: string) => {
    if (selectedAccount === account) {
      setAccount(null);
      return;
    }
    setAccount(selectedAccount);
  };

  const accounts = [
    {
      symbol: "USD",
      currency: "USD",
      name: "USD",
    },
    {
      symbol: "Peso Mexicano",
      currency: "Mexican Peso",
      name: "Peso Mexicano",
    },
    {
      symbol: "EURO",
      currency: "EURO",
      name: "Euro",
    },
  ];

  return (
    <Box mx={10}>
      <Box>
        <Heading size="xl">Cuentas</Heading>
        <FlatList
          data={accounts}
          renderItem={({ item }: { item: any }) => (
            <Pressable onPress={() => selectAccount(item.name)}>
              <Box $base-pl={0} $base-pr={0} $sm-pl="$4" $sm-pr="$5" py="$2">
                <HStack
                  space="md"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <HStack
                    space="md"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    {account === item.name ? (
                      <Avatar size="md">
                        <MaterialCommunityIcons name="check" size={20} />
                      </Avatar>
                    ) : (
                      <Avatar size="md"></Avatar>
                    )}
                    <Text
                      color="$coolGray800"
                      fontWeight="$bold"
                      $dark-color="$warmGray100"
                    >
                      {item.name}
                    </Text>
                  </HStack>
                  <Text>$100</Text>
                </HStack>
              </Box>
            </Pressable>
          )}
          keyExtractor={(item: any) => item.symbol}
        />
      </Box>

      <ButtonGroup justifyContent="space-around" mt={10}>
        <Button
          size="xl"
          onPress={() =>
            navigation.navigate("Send", { account, action: "Enviar" })
          }
        >
          <ButtonText>Enviar</ButtonText>
        </Button>

        <Button
          size="xl"
          onPress={() =>
            navigation.navigate("Request", { account, action: "Solicitar" })
          }
        >
          <ButtonText>Solucitar</ButtonText>
        </Button>
        <Button
          size="xl"
          onPress={() =>
            navigation.navigate("Exchange", { account, action: "Convertir" })
          }
        >
          <ButtonText>Convertir</ButtonText>
        </Button>
      </ButtonGroup>
      <Center>
        <Text></Text>
      </Center>
    </Box>
  );
}