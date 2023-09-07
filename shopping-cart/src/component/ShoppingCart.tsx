import { Offcanvas, Stack } from "react-bootstrap";
import { useShopItemContext } from "../context/ShopItemContext";
import shopItemData from "../data/items.json"
import { CartItem } from "./CartItem";

type ItemProp = {
    id: number
    name: string
    price: number
    imgUrl: string
}

type ShopItem = {
    id: number
    quantity: number
}

export function ShoppingCart() {
    const {getDrawerIsOpen, closeDrawer, getCartItems} = useShopItemContext();

    return (

        <Offcanvas show={getDrawerIsOpen} placement="end">

            <Offcanvas.Header onHide={closeDrawer} closeButton>
                <Offcanvas.Title>
                    cart
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

                <Stack className="vStack gap-2">

                    {getCartItems().map(item =>{

                        return CartItem( shopItemData.find(it => it.id === item.id) as ItemProp)
                    })}

            
                <div className="ms-auto fw-bold fs-5" >{"total" + " " +getTotalCardQuantity(getCartItems())}</div>
                </Stack>


            </Offcanvas.Body>

        </Offcanvas>


    )
}


function getTotalCardQuantity(cartItems : ShopItem[]){
    return cartItems.reduce((total, item) => total + (item.quantity * (shopItemData.find((it) => it.id === item.id)?.price ?? 0) ) , 0);
}