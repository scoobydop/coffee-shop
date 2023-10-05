import React from "react";
import Table, {TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "@/components/Table";
import Agency from "@/apiModel/Agency";
import TableActions from "@/components/TableActions";
import {useNavigate} from "react-router-dom";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

interface IAgencyTableProps {
    headers: string[];
    agencies: Agency[];
}

const AgencyTable: React.FunctionComponent<IAgencyTableProps> = ({headers, agencies}) => {
    const navigate = useNavigate();

    const {addPageTitle} = useUILayoutStore()

    const handleFullNameClick = (id: string, name: string) => {
        addPageTitle(name)
        navigate(`/agency-management/${id}`)
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {headers.map((item, index) => (
                        <TableHeaderCell
                            key={index}
                        >
                            {item}
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {agencies.map(agency => (
                    <TableRow
                        key={agency.id}
                    >
                        <TableCell>
                            <span
                                onClick={() => handleFullNameClick(agency.id, agency.fullName
                                )}
                            >
                                {agency.fullName}
                            </span>
                        </TableCell>
                        <TableCell>
                            {agency.email}
                        </TableCell>
                        <TableCell>
                            {agency.numberOfUsers}
                        </TableCell>
                        <TableCell>
                            {agency.expiryDate}
                        </TableCell>
                        <TableCell>
                            <TableActions isAgency={true} agencyEmail={agency.email} agencyFullName={agency.fullName} agencyId={agency.id} agencyExpiryDate={agency.expiryDate}                          />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AgencyTable;
