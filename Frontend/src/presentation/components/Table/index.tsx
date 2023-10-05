import React, {PropsWithChildren} from "react";
import {
    StyledTable,
    StyledTableBody,
    StyledTableCell,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableRow
} from "@/components/Table/Table.styled.ts";

const Table: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    );
};

export const TableHeader: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTableHeader>
            {children}
        </StyledTableHeader>
    );
};

export const TableHeaderCell: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTableHeaderCell>
            {children}
        </StyledTableHeaderCell>
    );
};

export const TableBody: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTableBody>
            {children}
        </StyledTableBody>
    );
}

export const TableRow: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTableRow>
            {children}
        </StyledTableRow>
    );
}

export const TableCell: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <StyledTableCell>
            {children}
        </StyledTableCell>
    );
}

export default Table;
