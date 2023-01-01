import styled from "styled-components"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
const Container = styled.footer`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    overflow-x: hidden !important;

    justify-content: center;
    align-items: flex-end;
    background: url("https://cdn.pixabay.com/photo/2019/05/13/15/44/night-4200265_1280.jpg");
    background-position: bottom right;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;

    .wrapper{
        width: 100%;
        height: auto;
        min-height: 20vh;
        padding: 10px 30px !important;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: space-around;

        .footer-group{
            display: flex;
            align-items: center;
            font-size: 12px !important;
            flex-wrap: wrap;

            &:first-child{
                gap: 10px;
                margin-right: 50px;

                .icon{
                    font-size: 1rem;
                }

                h4{
                    font-weight: 500;
                }
            }

            &:last-child{
                gap: 25px;
            }

            .footer-item{
                font-weight: 500;
                cursor: pointer !important;
            }
        }
    }

    @media(max-width: 890px) {
        .wrapper{
            flex-direction: column-reverse; 
            align-items: center !important;
        }
        .footer-group{
            justify-content: center !important;

            &:first-child{
            margin-right: 0 !important;
            padding-top: 10px !important;
            }
        }    
}
`;

const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <Container>
            <div className="wrapper">
                <div className="footer-group">
                    <AiOutlineCopyrightCircle className="icon" /> {year}
                    <h4>Ankrom Inc.</h4>
                </div>
                <div className="footer-group">
                    <div className="footer-item">Privacy</div>
                    <div className="footer-item">Security</div>
                    <div className="footer-item">Status</div>
                    <div className="footer-item">Docs</div>
                    <div className="footer-item">Contact</div>
                    <div className="footer-item">Pricing</div>
                    <div className="footer-item">API</div>
                    <div className="footer-item">Training</div>
                    <div className="footer-item">Blog</div>
                    <div className="footer-item">About</div>
                </div>
            </div>
        </Container>
    )
}

export default Footer