import { Card, Button } from "react-bootstrap"
import { CurrencyFormatter } from "../utilities/CurrencyFormatter"
import { useShopItemContext } from "../context/ShopItemContext"

type ShopItemProp = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function ShopItem({ id, name, price, imgUrl }: ShopItemProp) {
    const {getQuantity, increaseQuantity, decreaseQuantity, removeItem} = useShopItemContext()
    const quantity = getQuantity(id);

    return (
        <Card className="h-100 ">
            <Card.Img
                src={imgUrl}
                height='200px'
                style={{ objectFit: "cover" }}
            />

            <Card.Body className="d-flex flex-column ">

                <Card.Title className="mb-4" >
                    <div className="w-100 d-flex justify-content-between align-items-baseline ">
                        <span className="fs-5" >{name}</span>
                        <span className="fs-5 text-muted ms-2">{CurrencyFormatter(price)}</span>
                    </div>
                </Card.Title>

                {
                    quantity === 0 ? <Button onClick={() => increaseQuantity(id)}>+ Add to Cart</Button> : <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                        <div>
                            <Button className="me-1" onClick={() => decreaseQuantity(id)}>-</Button>
                            <span className="fs-2">{getQuantity(id)}</span>
                            in cart
                            <Button className="ms-1" onClick={() => increaseQuantity(id)}>+</Button>
                        </div>
                        <div>
                            <Button className="btn-danger" onClick={() => removeItem(id)}>Remove</Button>
                        </div>

                    </div>
                }
            </Card.Body>
        </Card>
    );

}