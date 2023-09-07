import { Button, Image } from "react-bootstrap";
import { useShopItemContext } from "../context/ShopItemContext";
import { CurrencyFormatter } from "../utilities/CurrencyFormatter";



type CartItemProp = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function CartItem({id, name, price, imgUrl}: CartItemProp){
    const {getQuantity, removeItem} = useShopItemContext();


    return (

        <div className="d-flex flex-row justify-content-between align-items-center">

        
            
            <Image width='100px' height="100px"  className=" rounded me-3" src={imgUrl} style={{objectFit: "cover"}}/>
        

            <div className="me-auto">
                {name + " "}
                {getQuantity(id) !== 1 ? <span >{getQuantity(id)}x</span> : null}
            
            </div>

            <h5>{CurrencyFormatter(price * getQuantity(id)) }</h5>

            <Button className="ms-1 btn-close border border-danger" variant="outline-danger"
            onClick={() => removeItem(id)} />
        </div>

    )
}