import { useFavStore } from '../../store/useFav'
import MiniButton from './MiniButton'

const FavButton = ({ item, icon }) => {

    const { addFav, removeFav, favItems } = useFavStore()
    const isFav = favItems.find((fav) => fav.id === item.id)

    const handleChangeFav = (value) => {
        if (isFav) {
            removeFav(value.id);
        } else {
            addFav(value);
        }
    };

    return (
        <MiniButton
            icon={icon}
            contentStyle={{ backgroundColor: "#eaeaea" }}
            onPress={() => handleChangeFav(item)}
        />
    )
}

export default FavButton
