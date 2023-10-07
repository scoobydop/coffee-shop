import Modal from "react-modal";
import {
    StyledButtonsContainer,
    StyledConfirmationModalWrapper,
    StyledHeaderContainer,
    StyledIconContainer,
    StyledModalContainer,
    StyledNoButton,
    StyledYesButton,
} from "./LogoutModal.styled.ts";
import AlertIcon from "@/assets/images/table/AlertIcon.tsx";
import {toast} from "react-toastify";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import React  from "react";
import {useQueryClient} from "@tanstack/react-query";



type IDeleteAndLogoutModalProps = {
    isOpen: boolean,
    dispatcher: React.Dispatch<React.SetStateAction<boolean>>,
    agencyExpiryDate: string,
} & ( LogoutAgencyProps );

type LogoutAgencyProps = {
    type:"LOGOUT"
    agencyId: string;
}



const DeleteAgencyModal : React.FunctionComponent <IDeleteAndLogoutModalProps> =(props) => {
    const {isOpen, dispatcher,} = props;
    // const queryClient = useQueryClient();


    const navigate = useNavigate();
    const cookie = new Cookies()


    const LogoutModal = ()=>{
        dispatcher(false)
    }



    const handleLogout = () => {
        // dispatcher(true)

        if (props.type === "LOGOUT") {

            cookie.remove('access');
            cookie.remove('user');
            toast.success("Logged Out Successfully!");
            navigate('login', {
                replace: true
            })
        }
        console.log ("CLicked")
    }




    return(
        <Modal
            isOpen = {isOpen}
            onRequestClose = { LogoutModal }
            ariaHideApp={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background : "none",
                    borderRadius:'20px',
                    border: "none",
                }
            }}


        >
            <StyledConfirmationModalWrapper>
                <StyledIconContainer>
                    <AlertIcon />
                </StyledIconContainer>
                <StyledModalContainer>
                    <StyledHeaderContainer>
                        <h1>
                            Are you sure?
                        </h1>
                    </StyledHeaderContainer>

                    <StyledButtonsContainer>
                        <StyledYesButton
                            onClick= {() => {
                                handleLogout();

                                // closeDeleteAndLogoutAgencyModal()
                            }}
                        >
                            Yes
                        </StyledYesButton>

                        <StyledNoButton onClick={LogoutModal}>
                            Cancel
                        </StyledNoButton>
                    </StyledButtonsContainer>
                </StyledModalContainer>
            </StyledConfirmationModalWrapper>
        </Modal>
    )
}
export default DeleteAgencyModal;