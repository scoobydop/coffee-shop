import React, {useEffect, useState} from "react";
import AgencyTable from "@/view/AgencyManagementView/_components/AgencyTable";
import useAgencies from "@/hooks/Agency/useAgencies.ts";
import {
    StyledActionBar,
    StyledAddAgencyButton,
    StyledAgencyTableView
} from "@/view/AgencyManagementView/AgencyManagementView.styled.ts";
import AddOrUpdateAgencyModal from "@/view/AgencyManagementView/_components/AddAgencyModal";
import Loading from "@/components/Loading/Loading.tsx";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const AgencyManagementView: React.FunctionComponent = () => {
    const [isAddAgencyModalOpen, setIsAddAgencyModalOpen] = useState<boolean>(false);
    const {data: agencies, isLoading} = useAgencies();
    const openAddAgencyModal = () => {
        setIsAddAgencyModalOpen(true);
    };

    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Agency Management")
    }, []);

    if (isLoading)
        return <Loading title={"Fetching Data..."}/>
    return (
        <>
            <AddOrUpdateAgencyModal
                agencyFullName={""}
                agencyId={""}
                agencyEmail={""}
                key={""}
                isOpen={isAddAgencyModalOpen}
                dispatcher={setIsAddAgencyModalOpen}
                type='ADD'
            />
            <StyledActionBar>
                <StyledAddAgencyButton
                    onClick={openAddAgencyModal}
                >
                    Add Agency
                </StyledAddAgencyButton>
            </StyledActionBar>
            <StyledAgencyTableView>
                {agencies && (
                    <AgencyTable
                        headers={["Full Name", "Email", "Number of Users", "Expiry Date", "Actions"]}
                        agencies={agencies}
                    />
                )}
            </StyledAgencyTableView>
        </>
    );
};

export default AgencyManagementView;
