import { useState } from "react";
import {
  Center,
  Box,
  Text,
  HStack,
  Input,
  InputField,
  Pressable,
  Button,
  ButtonText
} from "@gluestack-ui/themed";

import { Dropdown } from "react-native-element-dropdown";

import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Exchange({ navigation }: { navigation: any }) {
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "USD", value: "usd" },
    { label: "CAD", value: "cad" },
    { label: "MXN", value: "mxn" },
  ];

  const [toCurrency, setToCurrency] = useState('USD');
  const [fromCurrency, setFromCurrency] = useState('CAD');
  const [direction, setDirection] = useState('down');

  const setConversionDirection = () => {
    if (direction === 'down') {
      setDirection('up');
    } else if (direction === 'up') {
      setDirection('down');
    }
  }

  // TODO: to/from currency depends on the direction of the conversion

  return (
    <Box mx={10} my={50} justifyContent="center" alignItems="center">
      <HStack justifyContent="space-evenly" gap={20}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? fromCurrency : "..."}
          searchPlaceholder="Buscar..."
          value={fromCurrency}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setFromCurrency(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
            />
          )}
        />
        <Input
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          width="50%"
        >
          <InputField
            textAlign="center"
            keyboardType="numeric"
            placeholder="$"
            onChangeText={() => console.log("hello")}
          />
        </Input>
      </HStack>
      <Pressable onPress={setConversionDirection}>
        <MaterialCommunityIcons name={`arrow-${direction}`} size={20} />
      </Pressable>
      <HStack justifyContent="space-evenly" gap={20}>
        {/* <Box> */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? toCurrency : "..."}
          searchPlaceholder="Buscar..."
          value={toCurrency}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setToCurrency(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
            />
          )}
        />
        <Input
          size="xl"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          width="50%"
        >
          <InputField
            textAlign="center"
            keyboardType="numeric"
            placeholder="$"
            onChangeText={() => console.log("hello")}
          />
        </Input>
      </HStack>
      <Button
        size="xl"
        mt={20} 
        onPress={() => navigation.navigate("CashApp")}
        width={'100%'}
      >
        <ButtonText>Convertir</ButtonText>
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: "50%",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
