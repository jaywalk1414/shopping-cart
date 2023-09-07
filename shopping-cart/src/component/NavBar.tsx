
import { Navbar as NavbarBs, Container, NavLink, Nav, Button } from 'react-bootstrap';
import { NavLink as NavLinkDom } from 'react-router-dom';
import { useShopItemContext } from '../context/ShopItemContext';

export function NavBar() {
    const {openDarwer, closeDrawer, getCardQuantity} = useShopItemContext();

    return (
        <NavbarBs sticky='top' className="bg-white shadow-sm "  >
            <Container >
                <Nav className='mr-auto' >
                    <NavLink to="/" as={NavLinkDom} >
                        home
                    </NavLink>

                    <NavLink to="/shop" as={NavLinkDom} >
                        shop
                    </NavLink>
                    <NavLink to="/about" as={NavLinkDom} >
                        about
                    </NavLink>
                </Nav>

                { getCardQuantity() !== 0 ? 
                <Button className='rounded-circle' variant='outline-primary' style={{position: 'relative'}} onClick={() => openDarwer()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="30px" fill="blue" className="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>

                    
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{width:"18px", height:"18px", bottom: 0, right:0 , position: 'absolute' ,  color: 'white' }}>{getCardQuantity()}</div>

                </Button>
                    : null }

            </Container>
        </NavbarBs>
    );

    //   <div className='border border-primary rounded-circle p-1'>

}