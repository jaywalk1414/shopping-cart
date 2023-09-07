import { createContext, useContext, ReactNode, useState, useMemo } from "react";
import { ShoppingCart } from "../component/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import itemsJson from "../data/items.json"

type ShopItem = {
    id: number
    quantity: number
}

type ShopItemProviderProps = {
    children: ReactNode
}

type ShopItemContext = {
    openDarwer: () => void
    closeDrawer: () => void
    getCardQuantity: () => number
    getQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeItem: (id: number) => void
    getDrawerIsOpen: () => boolean
    getCartItems: () => ShopItem[]
}

const ItemContext = createContext({} as ShopItemContext);

export function useShopItemContext() {
    return useContext(ItemContext);
}




export function ShopItemProvider({ children }: ShopItemProviderProps) {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<ShopItem[]>("Shopping-cart-context",[]);


    function getQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseQuantity(id: number) {

        setCartItems(currentItems => {

            if (cartItems.find(item => item.id === id) == null) {
                return ([...currentItems, { id, quantity: 1 }])
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return ({ ...item, quantity: item.quantity + 1 });
                    }
                    else {
                        return item;
                    }
                }
                )
            }
        })
    }

    function decreaseQuantity(id: number) {

        setCartItems(currentItems => {

            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter((item) => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return ({ ...item, quantity: item.quantity - 1 });
                    }
                    else {
                        return item;
                    }
                }
                )
            }
        })
    }

    

    function removeItem(id: number){
        setCartItems(currentItems => {
            return currentItems.filter((item) =>{
                return item.id !== id;
            })
        })
    }


    function openDarwer(){
        setDrawerIsOpen(true);
    }

    function closeDrawer(){
        setDrawerIsOpen(false);
    }

    function getDrawerIsOpen(){
        return drawerIsOpen;
    }


    function getCardQuantity(){
        return cartItems.reduce((total, firstitem) =>{
            return total + firstitem.quantity;
        },0)
    }

    function getCartItems(){
        return cartItems;
    }
    


    return (
        <ItemContext.Provider value={{
            getQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeItem,
            openDarwer,
            closeDrawer,
            getCardQuantity,
            getDrawerIsOpen,
            getCartItems
        }}>

            {children}

            <ShoppingCart/>

        </ItemContext.Provider>
    )
}





