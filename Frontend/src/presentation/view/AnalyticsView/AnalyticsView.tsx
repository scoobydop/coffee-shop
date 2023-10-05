import React, {useEffect} from "react";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const AnalyticsView: React.FunctionComponent = () => {
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Analytics")
    }, []);
    return (
        <>Analytics View</>
    );
};

export default AnalyticsView;
