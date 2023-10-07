import React  , {useEffect} from "react";

import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const MenuView: React.FunctionComponent = () => {


    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Menu")
    }, []);


    return (
        <>
           <h1> is Menu</h1>
           </>
    );
};

export default MenuView;
