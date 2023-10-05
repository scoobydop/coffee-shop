// import Download from "@/assets/images/navbar/Download.svg"
// import Regenerate from "@/assets/images/navbar/Regenerate.svg"

import {StyledNavbarWrapper} from "@/components/Navbar/Navbar.styled.ts";

export const Navbar = ({text}: { text: string }) => {
    return (
        <StyledNavbarWrapper>
            <h1>{text}</h1>
            {/*<StyledRightSideFunctions>*/}
            {/*    <StyledButton $primary={false}>*/}
            {/*        <img  src={Regenerate} alt="regenrate"/>*/}
            {/*        Regenerate Report*/}
            {/*    </StyledButton>*/}
            {/*    <StyledButton $primary={true}>*/}
            {/*        <img src={Download} alt={"download"}/>*/}
            {/*        Download Report*/}
            {/*    </StyledButton>*/}
            {/*</StyledRightSideFunctions>*/}
        </StyledNavbarWrapper>
    );
};
