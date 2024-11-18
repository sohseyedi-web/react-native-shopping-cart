import { View } from 'react-native'
import MiniButton from './button/MiniButton'
import { ChevronLeftIcon, TrashIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'

const HeaderCart = ({ clear, num, data }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <MiniButton
                icon={<ChevronLeftIcon size={25} color={"#141414"} />}
                onPress={() => router.push("/")}
                contentStyle={{ backgroundColor: "rgb(34 197 94)" }}
            />
            {data?.length > num ? <MiniButton
                icon={<TrashIcon size={25} color={"#fefefe"} />}
                onPress={clear}
                contentStyle={{ backgroundColor: "#FF4545" }}
            /> : null}
        </View>
    )
}

export default HeaderCart
