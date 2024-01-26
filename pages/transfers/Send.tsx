import UserSelection from "./UserSelection"
export default function Send ({ navigation, route }: { navigation: any, route: any }) {
  return <UserSelection navigation={navigation} route={route} action="Enviar" />
}