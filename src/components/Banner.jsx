import styled from "styled-components"
import Navbar from "./Navbar"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 70px !important;
    background: url("https://cdn.pixabay.com/photo/2012/04/13/01/23/moon-31665_1280.png");
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    .content{
        width: 40%;
        display: flex;
        flex-direction: column;
        color: #fff;

        h1{
            font-size: 2em;
            text-transform: capitalize;
        }
        p{
            font-size: 18px;
        }
    }

    @media(max-width: 890px) {
        padding: 0 25px !important;

        .content{
            width: 70%;
        }
}
`
const Banner = () => {
    return (
        <Container>
            <Navbar />
            <div className="content">
                <h1>dream come true</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique distinctio, cupiditate expedita quas iure animi assumenda dolor impedit doloribus.</p>
            </div>
        </Container>
    )
}
export default Banner