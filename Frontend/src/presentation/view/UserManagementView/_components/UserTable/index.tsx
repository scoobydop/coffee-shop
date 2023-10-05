import React from "react";
import Table, {TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "@/components/Table";
import User from "@/apiModel/User";
import TableActions from "@/components/TableActions";

interface IUserTableProps {
  headers:string[];
  users: User[]
}

const UserTable: React.FunctionComponent<IUserTableProps> = ({headers, users}) => {
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
        {users.map(user => (
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
            <TableCell>
              <TableActions agencyEmail={""} agencyFullName={""} agencyId={""} key={""}  isAgency={false} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
