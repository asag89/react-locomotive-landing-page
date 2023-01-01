
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 !important;
  width: 100%;
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.58);
  border-radius: 20px;

  padding: 20px !important;
  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
    border-radius: 20px;

  }
`
const VerticalItem = ({ img, name }) => {
    return (
        <Container>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum necessibus, possimus assumenda expedita mollitia.</p>
        </Container>
    );
}

export default VerticalItem