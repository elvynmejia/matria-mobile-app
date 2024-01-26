import { useEffect, useState } from "react";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text,
  Input,
  InputField,
  FlatList,
  Heading,
  Box,
  HStack,
  Avatar,
  AvatarImage,
  VStack,
  Pressable
} from "@gluestack-ui/themed";

const UserAvatar = ({
  avatarUrl,
  id,
  userSelected,
}: {
  avatarUrl: string | null;
  id: string;
  userSelected: any;
}) => {
  if (avatarUrl) {
    if (userSelected?.id === id) {
      return (
        <Avatar size="md">
          <MaterialCommunityIcons name="check" size={20} />
        </Avatar>
      );
    } else {
      return (
        <Avatar size="md">
          <AvatarImage source={{ uri: avatarUrl }} alt="user avatar" />
        </Avatar>
      );
    }
  } else {
    if (userSelected?.id === id) {
      return (
        <Avatar size="md">
          <MaterialCommunityIcons name="check" size={20} />
        </Avatar>
      );
    } else {
      return (
        <Avatar size="md">
          <MaterialCommunityIcons name="account" size={20} />
        </Avatar>
      );
    }
  }
};

export default function UserSelection({
  navigation,
  route,
  action 
}: { 
  navigation: any,
  route: any,
  action: string
}) {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [userSelected, setUserSelected] = useState(null);

  /*
  example user 

  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const onSearch = (t: string) => {
    // if (!t) {
    //   return;
    // }

    const searchTerm = t.toLowerCase();

    setUsers((prev) => {
      const existing = [...prev];
      return existing.filter((u: any) => {
        const name = u.name.toLowerCase();
        const username = u.username.toLowerCase();

        return name.includes(searchTerm) || username.includes(searchTerm);
      });
    });
  };

  const onUserSelected = (user: any) => {
    console.log("onUserSelected.user", user);
    setUserSelected(user);
    navigation.navigate("Checkout", { user, account: route?.params.account, action });
  };

  return (
    <Box mx={10} my={50} gap={15}>
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="name or @username" onChangeText={onSearch} />
      </Input>
      <Heading size="md">Contactos</Heading>
      <FlatList
        data={users}
        renderItem={({ item }: { item: any }) => (
          <Box $base-pl={0} $base-pr={0} $sm-pl="$4" $sm-pr="$5" py="$2">
            <Pressable onPress={() => onUserSelected(item)}>
              <HStack space="md" justifyContent="flex-start">
                <UserAvatar
                  id={item.id}
                  userSelected={userSelected}
                  avatarUrl={null}
                />
                <VStack>
                  <Text
                    color="$coolGray800"
                    fontWeight="$normal"
                    $dark-color="$warmGray100"
                  >
                    {item.name}
                  </Text>
                  <Text color="$coolGray600" $dark-color="$warmGray200">
                    {item.username}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          </Box>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </Box>
  );
}
