import {
  Box,
  Input,
  InputField,
  Button,
  ButtonGroup,
  ButtonText,
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

  return (
    <Box 
      mx={10}
      my={50}
      gap={50}
    >
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
          placeholder="$"
          type="text"
          onChangeText={() => {}}
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
          onChangeText={() => {}}
        />
      </Input>
      <Input
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Para que es esto?" onChangeText={() => {}} />
      </Input>
      <ButtonGroup justifyContent="space-around">
        <Button size="xl">
          <ButtonText>Cobrar</ButtonText>
        </Button>
        <Button size="xl">
          <ButtonText>Pagar</ButtonText>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
