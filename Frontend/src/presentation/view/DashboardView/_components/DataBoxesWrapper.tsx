import {
    StyledDataBox,
    StyledDataBoxesWrapper,
    StyledDescriptor,
} from "@/view/DashboardView/_components/DataBoxesContainer.styled.ts";

import IconGrowth from "@/assets/images/dashboard/Leftarrowicon";
import IconLoss from "@/assets/images/dashboard/Rightarrowicon";
import React from "react";

type DBox = {
    id: number;
    text: string;
    count: number;
    growthPercentage: number;
    growthType: string;
    icon: React.ReactNode;
    growth: boolean;
}

const DataBoxesWrapper = () => {
    const dataBoxes: DBox[] = [
        {
            id: 1,
            text: "total agencies",
            count: 17,
            growthPercentage: 22.8,
            growthType: "Agency",
            icon: <IconGrowth/>,
            growth: true,
        },
        {
            id: 2,
            text: "independent users",
            count: 36,
            growthPercentage: 25.6,
            growthType: "User",
            icon: <IconLoss/>,
            growth: false,
        },
        {
            id: 3,
            text: "total agencies",
            count: 17,
            growthPercentage: 22.8,
            growthType: "Agency",
            icon: <IconGrowth/>,
            growth: true,
        },
        {
            id: 4,
            text: "total agencies",
            count: 17,
            growthPercentage: 22.8,
            growthType: "Agency",
            icon: <IconLoss/>,
            growth: false,
        },
    ];

    return (
        <StyledDataBoxesWrapper>
            {dataBoxes.map((dataBox) => (
                <div key={dataBox.id}>
                    <StyledDataBox>
                        {/* HEADING OF EACH BOX*/}
                        <p>{dataBox.text}</p>
                        {/* ACTUAL NUMBER OF COUNTS */}
                        <span>{dataBox.count}</span>
                        {/* GROWTH OR LOSS */}
                        <StyledDescriptor
                            growing={dataBox.growth}
                        >
                            {dataBox.icon}
                            <span>{dataBox.growthPercentage}%</span>
                            <p>Agency {dataBox.growth ? "growth" : "loss"}</p>
                        </StyledDescriptor>
                    </StyledDataBox>
                </div>
            ))}
        </StyledDataBoxesWrapper>
    );
};

export default DataBoxesWrapper;
