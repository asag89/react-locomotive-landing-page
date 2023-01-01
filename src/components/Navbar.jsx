
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsFillTreeFill } from "react-icons/bs"

const Container = styled.div`
    width: 100%;
    width: calc(100% - 17px);
    height: 80px;
    position: fixed ;
    top: 0 ;
    left: 0 ;
    z-index: 99;
    transition: .2s ease-in;
    background-color: ${({ bg }) => bg === "out" ? "#06051a" : "transparent"};
    /* background-color: transparent; */
    &:hover{
        background-color:${({ bg }) => bg === "out" ? "#06051a" : "rgba(0,0,0,0.6)"};
    }

.n-dark {
    background-color: #111827;
    border-bottom: 1px solid #fff;
}

.navbar {
    max-width: 1150px;
    margin: 0 auto !important;
    height: 100%;
    padding: 0 20px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        fill: #fff;
        font-size: 2rem;
    }

    .link-container{
        display: flex;
        align-items: center;
        gap: 20px;
        
        .nav-link{
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    }
}
`
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 70) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])
    return (
        <Container bg={scrolled ? "out" : "initial"}>
            <nav className="navbar">
                <BsFillTreeFill className="logo" />
                <div className="link-container">
                    <span className="nav-link" >Home</span>
                    <span className="nav-link" >About</span>
                    <span className="nav-link" >Projects</span>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar