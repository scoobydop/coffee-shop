import styled from "styled-components";



const StyleUsersModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`

const StyleUsersModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`

const StyledLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--Black, #242424);
    margin-bottom: 5px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
`

const StyledInput = styled.input`
  padding-left: 1em;
  width: 406px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid var(--Everything-Green, #1B9876);
  background: #FFF;

  &::placeholder {
    padding-left: 10px;
  }
`

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  label {
    color: var(--Black, #242424);
    margin-bottom: 5px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
`

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid var(--Everything-Green, #1B9876);
  accent-color: var(--Everything-Green, #1B9876);
`

const StyledAddOrUpdateButton = styled.button`
  background: var(--primary-color);
  color: white;
  width: 406px;
  height: 45px;
  border-radius: 6px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;

  ${({disabled}) => disabled && `
    cursor: not-allowed;
    pointer-events: none;
    filter: grayscale();
  `}
`;

const StyledRemoveButton = styled.button`
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  width: 406px;
  background: white;
  height: 45px;
  border-radius: 6px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;

export {
    StyleUsersModalWrapper,
    StyleUsersModalForm,
    StyledLabelInputContainer,
    StyledInput,
    StyledCheckbox,
    StyledCheckboxContainer,
    StyledAddOrUpdateButton,
    StyledRemoveButton
}