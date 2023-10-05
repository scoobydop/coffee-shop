import styled from "styled-components";

interface IDescriptorProps {
    growing: boolean;
}

const StyledDataBoxesWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const StyledDataBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 258px;
  border-radius: 15px;
  box-shadow: 0 10px 50px -19px rgba(0, 0, 0, 0.5);
  font-family: SFProDisplay, serif;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  gap: 30px 0;

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  span {
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
  }
`;

const StyledDescriptor = styled.div<IDescriptorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0 3px;
  white-space: nowrap;

  img {
    height: 16px;
    width: 16px
  }

  span {
    font-family: SFProDisplay, serif;
    font-size: 18px;
    font-weight: normal;
    color: ${({growing}) => (growing ? "#35C536" : "#F22A2B")};
  }

  p {
    font-family: SFProDisplay, serif;
    font-size: 18px;
    color: #828282;
    font-weight: normal;
  }
`;


export {
    StyledDataBoxesWrapper,
    StyledDataBox,
    StyledDescriptor
}
