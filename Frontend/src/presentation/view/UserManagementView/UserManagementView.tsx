import React, {useEffect} from "react";
import useUsers from "@/hooks/User/useUsers.ts";
import UserTable from "@/view/UserManagementView/_components/UserTable";
import Loading from "@/components/Loading/Loading.tsx";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const UserManagementView: React.FunctionComponent = () => {
    const {data: users, isLoading} = useUsers();
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("User Management")
    }, []);
    if (isLoading) {
        return <Loading title={"Fetching Data"} />
    }
    return (
        <>
            {users && (
                <UserTable
                    headers={["Company", "Website", "Email","Expiry Date", "Actions"]}
                    users={users}
                />
            )}
        </>
    );
};

export default UserManagementView;
