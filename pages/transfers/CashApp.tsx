import {
  Box,
  HStack,
  Text,
  Pressable,
  ButtonGroup,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useState } from "react";

export default function CashApp({
  navigation,
  route,
}: {
  route: any;
  navigation: any;
}) {
  const [account, setAccount] = useState("USD");

  const selectAccount = (account: string) => {
    setAccount(account);
  };

  return (
    <Box mt={10}>
      <HStack space="xs" reversed={false} justifyContent="center">
        <Pressable onPress={() => selectAccount("USD")}>
          <Box
            w="$20"
            h="$20"
            bg="$blue300"
            justifyContent="center"
            alignItems="center"
          >
            <Text>USD</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => selectAccount("Mexican Pesos")}>
          <Box
            w="$20"
            h="$20"
            bg="$blue400"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Mexican Pesos</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => selectAccount("Euro")}>
          <Box
            w="$20"
            h="$20"
            bg="$blue500"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Euro</Text>
          </Box>
        </Pressable>
      </HStack>

      <ButtonGroup justifyContent="space-around" mt={10}>
        <Button
          size="xl"
          onPress={() => navigation.navigate("Send", { account, action: "Enviar" })}
        >
          <ButtonText>Enviar</ButtonText>
        </Button>

        <Button
          size="xl"
          onPress={() => navigation.navigate("Request", { account, action: "Solicitar" })}
        >
          <ButtonText>Solucitar</ButtonText>
        </Button>
        <Button
          size="xl"
          onPress={() => navigation.navigate("Exchange", { account, action: "Convertir" })}
        >
          <ButtonText>Convertir</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
