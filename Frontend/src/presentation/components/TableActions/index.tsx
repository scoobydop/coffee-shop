import {
    StyledTableButton,
    StyledTableButtonWrapper
} from "@/components/TableActions/TableActions.styled.ts";
import DeleteIcon from "@/assets/images/table/DeleteIcon.tsx";
import EditIcon from "@/assets/images/table/EditIcon.tsx";
import React, {useState} from "react";
import AddOrUpdateAgencyModal from "@/view/AgencyManagementView/_components/AddAgencyModal";
import DeleteAndLogoutAgencyModal from "@/view/AgencyManagementView/_components/DeleteAndLogoutAgencyModal";
import UpdateUsersModal from "@/view/UserManagementView/_components/UpdateUsers/UpdateUsersModal.tsx";


interface ITableActionProps{
    isAgency: boolean
    agencyFullName:string
    agencyEmail:string
    agencyId:string
    agencyExpiryDate:string
    usersId : string
    usersCompany : string
    usersFullName:string
    usersExpiryDate : string


}


const TableActions:React.FunctionComponent<ITableActionProps> = ({agencyEmail, agencyFullName, agencyId, isAgency, agencyExpiryDate, usersId,usersExpiryDate , usersFullName , usersCompany}) => {
    const [isUpdateAgencyModalOpen, setIsUpdateAgencyModalOpen] = useState<boolean>(false);
    const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState<boolean>(false);
    const [isDeleteAgencyModalOpen, setIsDeleteAgencyModalOpen] = useState<boolean>(false);

    // const {data: agencies} = useAgencies();
    const openUpdateAgencyModal = () => {
        setIsUpdateAgencyModalOpen(true);
    };
    const openDeleteAgencyModal = () => {
        setIsDeleteAgencyModalOpen(true);
    };

    return (
        <>
            <AddOrUpdateAgencyModal
                isOpen={isUpdateAgencyModalOpen}
                dispatcher={setIsUpdateAgencyModalOpen}
                type='UPDATE'
                agencyFullName={agencyFullName}
                agencyEmail={agencyEmail}
                agencyId={agencyId}
                agencyExpiryDate={agencyExpiryDate}
            />
            <DeleteAndLogoutAgencyModal
                agencyId={agencyId}
                dispatcher={setIsDeleteAgencyModalOpen}
                type="DELETE"
            isOpen={isDeleteAgencyModalOpen}
            />
            <UpdateUsersModal
                dispatcher={setIsUpdateUserModalOpen}
                type="UPDATE-USERS"
                isOpen={isUpdateUserModalOpen}
                usersId={usersId}
                usersCompany = {usersCompany}
                usersExpiryDate = {usersExpiryDate}
                usersFullName = {usersFullName}
            />


            <StyledTableButtonWrapper>
                <StyledTableButton
                    onClick={isAgency? openUpdateAgencyModal: undefined}

                >
                    <EditIcon />
                </StyledTableButton>

                <StyledTableButton
                    onClick={openDeleteAgencyModal}
                >
                    <DeleteIcon />
                </StyledTableButton>



            </StyledTableButtonWrapper>
        </>
    );
};

export default  TableActions
