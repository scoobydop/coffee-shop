import styled from "styled-components";

const StyledLoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 20%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20%);
`

const StyledLoadingBox = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center; 
  height: 400px;
  width: 450px;
  border-radius: 15px;
  gap: 40px 0;
  -webkit-box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1);
  box-shadow: 0 0 21px -6px rgba(66, 68, 90, 1);
  h1{
    color: var(--Black, #242424);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p{
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
`

const StyledLoaderSpinner = styled.div`
  border: 24px solid #BAE0D5;
  border-top: 24px #1B9876 solid;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export {StyledLoadingWrapper, StyledLoaderSpinner, StyledLoadingBox}
