import React, {useEffect} from "react";
import {useUILayoutStore} from "@/hooks/UILayout/useUILayout.ts";

const CartView: React.FunctionComponent = () => {
    const {addPageTitle} = useUILayoutStore()
    useEffect(() => {
        addPageTitle("Cart")
    }, []);

    return (
        <>

My Cart        </>
    )
};

export default CartView;
