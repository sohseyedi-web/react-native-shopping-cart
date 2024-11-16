import { StyleSheet, View } from 'react-native'
import TextField from '../components/TextField'
import { MapPinIcon, UserIcon, MapIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { PhoneIcon } from 'react-native-heroicons/solid'
import Avatar from '../components/Avatar'
import SubmitButton from '../components/button/SubmitButton'
import MiniButton from '../components/button/MiniButton'
import { router } from 'expo-router'

const Profile = () => {
  return (
    <View style={styles.container}>
      <MiniButton
        icon={<ChevronLeftIcon size={25} color={"#141414"} />}
        onPress={() => router.push("/")}
        contentStyle={{ backgroundColor: "rgb(34 197 94)" }}
      />
      <View style={styles.profile}>
        <Avatar customStyle={styles.cover} />
        <TextField icon={<UserIcon size={25} color={"#fefefe"} />} placeHolder={"Family Name"} />
        <TextField icon={<PhoneIcon size={25} color={"#fefefe"} />} placeHolder={"Phone Number"} />
        <TextField icon={<MapPinIcon size={25} color={"#fefefe"} />} placeHolder={"City"} />
        <TextField icon={<MapIcon size={25} color={"#fefefe"} />} placeHolder={"Address"} />
        <SubmitButton
          title={"Save Changes"}
          contentStyle={{ backgroundColor: "#141414" }}
          textStyle={{ color: "rgb(34 197 94)" }} />
      </View>
    </View >
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40A578",
    flex: 1,
    padding: 16,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    width: "90%",
    marginHorizontal: "auto",
    gap: 8
  },
  cover: {
    height: 80,
    width: 80,
    borderRadius: 18,
  },

})