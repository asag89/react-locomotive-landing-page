import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 350px;
  margin:  50px 50px 0 0 !important;
  padding: 15px 15px 25px !important;
  border-radius: 20px;
  cursor: pointer;

  &:hover{
      box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.58);
  }
  img {
    width: 100%;
    border-radius: 20px;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media(max-width: 890px) {
    width: 70vw;
  }
`;

const HorizontalItem = ({ img }) => {
  return (
    <Container>
      <img src={img} alt="Dreamer" />
      <h1>Dreamer</h1>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor facilis quasi, error iure tenetur? Repudiandae magnam ipsum temporibus maiores.</div>
    </Container>
  );
}

export default HorizontalItem