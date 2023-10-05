import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  //border-collapse: collapse;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 10px;
`;

const StyledTableHeader = styled.thead`
 
`;

const StyledTableHeaderCell = styled.th`
  background: var(--primary-color);
  color: #fff;
  height: 50px;
  padding-left: 1em;
  text-align: left;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
  }
`;

const StyledTableRow = styled.tr`
  height: 42px;
  &:nth-child(odd) {
    background-color: #F2F2F2; /* Light gray for odd rows */
  }

  &:nth-child(even) {
    background-color: #ffffff; /* White for even rows */
  }

  `;

const StyledTableBody = styled.tbody`
    ${StyledTableRow} {
      &:last-child{
        border-bottom-right-radius: 10px;
        //background: red;
      }
    }
`;

const StyledTableCell = styled.td`
  padding-left: 1em;
  text-align: left;
`;

export {
    StyledTable,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableBody,
    StyledTableRow,
    StyledTableCell
}
