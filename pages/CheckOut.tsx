import { useState } from "react";
import {
  Box,
  Input,
  InputField,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Center
} from "@gluestack-ui/themed";

export default function CheckOut({
  navigation,
  route,
}: {
  route: any;
  navigation: any;
}) {
  console.log("CheckOut.", {
    route,
    navigation,
  });

  const [transaction, setTransaction] = useState({
    amount: 0,
    memo: "",
    currency: "",
  });

  const handleInputChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    setTransaction((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Box mx={10} my={50} gap={50}>
      {/* <Text>{JSON.stringify(transaction, null, 2)}</Text> */}
      <Center>
        <Text>{route?.params.user?.name}</Text>
      </Center>
      <Input
        variant="underlined"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          textAlign="center"
          keyboardType="numeric"
          placeholder="Cantidad"
          onChangeText={(value) => handleInputChange({ name: "amount", value })}
        />
      </Input>

      <Input
        variant="underlined"
        size="sm"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Typo de moneda?"
          type="text"
          onChangeText={(value) =>
            handleInputChange({ name: "currency", value })
          }
        />
      </Input>
      <Input
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Para que es esto?"
          onChangeText={(value) => handleInputChange({ name: "memo", value })}
        />
      </Input>
      <ButtonGroup justifyContent="space-around">
        <Button
          size="xl"
          onPress={() => console.log("================== Cobrar ============")}
        >
          <ButtonText>Cobrar</ButtonText>
        </Button>

        <Button
          size="xl"
          onPress={() => console.log("=================== Pagar ============")}
        >
          <ButtonText>Pagar</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
