import styled from "styled-components";

const StyledTableButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 5px;
`
const StyledTableButton = styled.button`
  border: none;
  outline: none;
  height: 32px;
  background: none;
  width: 32px;
cursor: pointer;
  display: flex;
  flex-direction: row;
  
`
const StyledConfirmationModalWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 gap: 0 20px;
  width: 500px;
  height: 200px;
`

const StyledIconContainer = styled.div`
  
`

const StyledModalContainer = styled.div`
  display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 40px 0;

 width: 100%;
 height: 100%;
`

const StyledHeaderContainer = styled.div`
 h1{
  font-size: xxx-large;
   color: gray;
 }
`

const StyledButtonsContainer = styled.div`
 width: 100%;
 display: flex;
 gap: 0 20px;
 justify-content: end;
 align-items: center;
 margin-right: 25px;
`

const StyledYesButton = styled.button`
width : 80px;
  height: 40px;
cursor: pointer;
  border:  none;
background: var(--danger-color);
color: white;  
border-radius: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  
`

const StyledNoButton = styled.button`
  width : 80px;
  height: 40px;
cursor: pointer;
background: var(--white-color);
border: 2px solid gray;
color: gray;
  border-radius: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`





export {StyledTableButton, StyledYesButton, StyledNoButton, StyledConfirmationModalWrapper, StyledTableButtonWrapper, StyledButtonsContainer, StyledHeaderContainer, StyledModalContainer, StyledIconContainer}
