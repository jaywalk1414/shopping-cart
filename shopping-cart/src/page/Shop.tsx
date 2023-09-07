import { Row, Col, FormControl, Button} from "react-bootstrap";

import shopItemsData from '../data/items.json'
import { ShopItem } from "../component/ShopItem";
import { useMemo, useState } from "react";


export function Shop(){

    const [query, setQuery] = useState<string>('');

    
    const renderedItems  = useMemo(() =>
    { return shopItemsData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))},[query]);



    return (

        <>

        <div className="input-group w-50 mx-auto mt-2 mb-3 sticky-top " style={{top:"70px"}} >
          <FormControl value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="search"  aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <Button className="btn-primary search disabled" id="basic-addon2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </Button>
          </div>
        </div>


        <Row lg={3} md={2} sm={1} xs={1} className="m-1" >
            {
                renderedItems.map(item => {
                    return<Col key={item.id} className="mb-3">{ShopItem(item)}</Col>;
                })
            }            
         </Row>

         
        </>

    )
}

