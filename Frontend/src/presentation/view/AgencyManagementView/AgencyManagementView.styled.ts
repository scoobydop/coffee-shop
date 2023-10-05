import styled from "styled-components";

const StyledActionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

const StyledAddAgencyButton = styled.button`
  margin: 1em 2em;
  padding: 0.35em 0.65em;
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 6px;
  border: 1px solid var(--Everything-Green, #1B9876);
  background: var(--Everything-Green, #1B9876);
&:hover{
  cursor: pointer;
}
`;

const StyledAgencyTableView = styled.div`
`;

export {
    StyledActionBar,
    StyledAddAgencyButton,
    StyledAgencyTableView,
};
