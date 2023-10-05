import React, {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import useUserByAgency from "@/hooks/User/useUserByAgency.ts";
import Table, {TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "@/components/Table";
import {StyledActionBar} from "@/view/AgencyManagementView/AgencyManagementView.styled.ts";
import {StyledAddAgencyBackButton} from "@/view/AgencyManagementView/AgencyUsersTableView/AgencyUsersTable.styled.ts";
import Loading from "@/components/Loading/Loading.tsx";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const tableHeaders = ["Company", "Website", "Email", "Expiry Date"];

const AgencyUsersTableView: React.FunctionComponent = () => {
    const {agencyId} = useParams();
    const route = useNavigate();
    if (!agencyId) {
        return <Navigate to={'/agency-management'} replace/>;
    }
    const {data: users, isLoading} = useUserByAgency(agencyId);



    // const {addPageTitle} = useUILayoutStore()
    // useEffect(() => {
    //     addPageTitle(users)
    // }, []);

    if (isLoading)
        return <Loading title={"Fetching Data"} />
    return (
        <>
            <StyledActionBar>
                <StyledAddAgencyBackButton
                    onClick={() => route(-1)}
                >
                    Back
                </StyledAddAgencyBackButton>
            </StyledActionBar>

            <Table>
                <TableHeader>
                    <TableRow>
                        {tableHeaders.map(header => <TableHeaderCell key={header}>{header}</TableHeaderCell>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users && users.map(user => (
                        <TableRow
                            key={user.id}
                        >
                            <TableCell>
                                {user.company}
                            </TableCell>
                            <TableCell>
                                {user.website}
                            </TableCell>
                            <TableCell>
                                {user.email}
                            </TableCell>
                            <TableCell>
                                {user.expiryDate}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </>
    );
};

export default AgencyUsersTableView;
