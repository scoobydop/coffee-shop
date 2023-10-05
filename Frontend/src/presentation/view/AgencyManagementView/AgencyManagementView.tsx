import React, {useEffect, useState} from "react";
import AgencyTable from "@/view/AgencyManagementView/_components/AgencyTable";
import useAgencies from "@/hooks/Agency/useAgencies.ts";
import {
    StyledActionBar,
    StyledAddAgencyButton,
    StyledAgencyTableView
} from "@/view/AgencyManagementView/AgencyManagementView.styled.ts";
import Loading from "@/components/Loading/Loading.tsx";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const MenutView: React.FunctionComponent = () => {
    const [isAddAgencyModalOpen, setIsAddAgencyModalOpen] = useState<boolean>(false);
    const {data: agencies, isLoading} = useAgencies();
    const openAddAgencyModal = () => {
        setIsAddAgencyModalOpen(true);
    };

    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Menu")
    }, []);

    if (isLoading)
        return <Loading title={"Fetching Data..."}/>
    return (
        <>
           <h1> is Menu</h1>
           </>
    );
};

export default MenutView;
