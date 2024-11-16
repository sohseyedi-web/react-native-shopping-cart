import { Image } from "react-native"

const Avatar = ({ customStyle }) => {
    return (
        <Image source={require("../assets/defaultUser.png")} resizeMode='contain' style={customStyle} />
    )
}

export default Avatar
