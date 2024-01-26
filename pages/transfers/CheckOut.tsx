import { useState, useRef, useEffect } from "react";
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

  const amountRef = useRef<typeof InputField>(null);

  useEffect(() => {
    // @ts-ignore
    if (amountRef?.current) {
      // @ts-ignore
      amountRef?.current?.focus();
    }
  }, []);

  return (
    <Box mx={10} my={50} gap={50}>
      {/* <Text>{JSON.stringify(transaction, null, 2)}</Text> */}
      <Center>
        <Text>{route?.params.user?.name}</Text>
      </Center>
      <Input
        variant="underlined"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          ref={amountRef} // @ts-ignore
          textAlign="center"
          keyboardType="numeric"
          placeholder="$"
          onChangeText={(value) => handleInputChange({ name: "amount", value })}
        />
      </Input>

      <Center>
        <Text>
          {route?.params?.account}
        </Text>
      </Center>
      <Input
        variant="outline"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Agrega una nota"
          onChangeText={(value) => handleInputChange({ name: "memo", value })}
        />
      </Input>
      <Button
          size="xl"
          onPress={() => console.log("=================== Pagar ============")}
        >
          <ButtonText>{route?.params?.action}</ButtonText>
        </Button>
    </Box>
  );
}
