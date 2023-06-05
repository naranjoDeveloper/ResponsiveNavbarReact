import { styled } from "styled-components"
import BurgerButton from "./BurgerButton"
import { useState } from "react"

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }

  return (
   <>
    <NavContainer>
        <h2>Tavoloco</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a onClick={handleClick} href="">Inico</a>
            <a onClick={handleClick} href="">Acerca De</a>
            <a onClick={handleClick} href="">Tienda</a>
            <a onClick={handleClick} href="">Contacto</a>
            <a onClick={handleClick} href="">Blog</a>
        </div>
        <div className="burger">
            <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
    </NavContainer>
   </>
  )
}

export default Navbar

const NavContainer = styled.nav`
    h2{
        padding: 10px;
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }

    padding: .4rem;
    background-color: #333;
    display:flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        margin-left: auto;
        right: 0;
        margin-right: auto;
        text-align: center;
        transition: all 0.5s ease;
        a{
            color: black;
            font-size: 2rem;
            display:block;
            transition: all 0.5s ease;
        }
        @media (min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display:inline;
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: white;
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .burger{
        @media (min-width: 768px){
            display: none;
        }
    }

`

const BgDiv = styled.div`
    position: absolute;
    background-color: #222;
    top: -700px;
    left: -2000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;

    &.active{
        border-radius: 0 0 50% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
`