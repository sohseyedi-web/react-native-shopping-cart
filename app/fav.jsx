import { useFavStore } from '../store/useFav'
import ScreenWrapper from '../components/wrapper/ScreenWrapper'
import CartWrapper from '../components/wrapper/CartWrapper'
import HeaderCart from '../components/HeaderCart'
import { useEffect } from 'react'
import { router } from 'expo-router'

const FavItems = () => {


    const { favItems, clearList } = useFavStore()
    
    useEffect(() => {
        if (favItems.length === 0) {
            router.push("/")
        }
    }, [favItems])

    return (
        <ScreenWrapper>
            <HeaderCart num={1} data={favItems} clear={clearList} />
            <CartWrapper data={favItems} model={"fav"} />
        </ScreenWrapper >
    )
}

export default FavItems
