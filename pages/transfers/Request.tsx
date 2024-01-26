import UserSelection from "./UserSelection";

export default function Request ({ navigation, route }: { navigation: any, route: any }) {
  return <UserSelection navigation={navigation} route={route} action="Solucitar"/>
}