import { StyleSheet, View, Animated, Easing } from 'react-native'
import { HeartIcon as HeartSolid, BookmarkIcon as BookMarkSolid } from 'react-native-heroicons/solid';
import { HeartIcon, BookmarkIcon } from 'react-native-heroicons/outline';
import { useFavStore } from '../../store/useFav';
import MiniButton from '../button/MiniButton';
import { useState, useRef, memo } from 'react';

const ProductCartHeader = memo(({ item }) => {
    const { addFav, removeFav, favItems } = useFavStore()
    const [isSave, setIsSave] = useState(false)
    const isFav = favItems.find((fav) => fav.id === item.id)

    const favScaleValue = useRef(new Animated.Value(1)).current;
    const saveScaleValue = useRef(new Animated.Value(1)).current;

    const animateButton = (animatedValue) => {
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 0.8,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.spring(animatedValue, {
                toValue: 1,
                friction: 4,
                tension: 140,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleChangeFav = (value) => {
        animateButton(favScaleValue);
        if (isFav) {
            removeFav(value.id);
        } else {
            addFav(value);
        }
    };

    const handleSaveToggle = () => {
        animateButton(saveScaleValue);
        setIsSave(!isSave);
    };

    const dynamicHeartIcon = isFav ? <HeartSolid color={"#ff2929"} size={24} /> : <HeartIcon color={"#141414"} size={24} />
    const dynamicSaveIcon = isSave ? <BookMarkSolid color={"#9694FF"} size={24} /> : <BookmarkIcon color={"#141414"} size={24} />

    return (
        <View style={styles.top}>
            <Animated.View style={{ transform: [{ scale: favScaleValue }] }}>
                <MiniButton
                    onPress={() => handleChangeFav(item)}
                    icon={dynamicHeartIcon}
                    contentStyle={{ backgroundColor: "#eaeaea" }}
                />
            </Animated.View>

            <Animated.View style={{ transform: [{ scale: saveScaleValue }] }}>
                <MiniButton
                    onPress={handleSaveToggle}
                    icon={dynamicSaveIcon}
                    contentStyle={{ backgroundColor: "#eaeaea" }}
                />
            </Animated.View>
        </View>
    )
})

export default ProductCartHeader

const styles = StyleSheet.create({
    top: {
        position: "absolute",
        width: "100%",
        paddingHorizontal: 8,
        top: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        zIndex: 1,
    }
})