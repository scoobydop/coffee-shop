import React, {useEffect} from "react";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const SettingsView: React.FunctionComponent = () => {
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Settings ")
    }, []);
    return (
        <>Settings</>
    );
};

export default SettingsView;
