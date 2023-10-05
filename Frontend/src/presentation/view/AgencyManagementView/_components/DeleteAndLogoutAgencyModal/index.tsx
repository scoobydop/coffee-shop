import Modal from "react-modal";
import {
    StyledButtonsContainer,
    StyledConfirmationModalWrapper,
    StyledHeaderContainer,
    StyledIconContainer,
    StyledModalContainer,
    StyledNoButton,
    StyledYesButton,
} from "@/view/AgencyManagementView/_components/DeleteAndLogoutAgencyModal/DeleteAndLogoutAgencyModal.styled.ts";
import AlertIcon from "@/assets/images/table/AlertIcon.tsx";
import {useDeleteLoginStore} from "@/hooks/DeleteAndLogout/useLogoutandDelete.ts";
import {toast} from "react-toastify";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import useDeleteAgency from "@/hooks/Agency/useDeleteAgency.ts";
import {useQueryClient} from "@tanstack/react-query";



type IDeleteAndLogoutModalProps = {
    isOpen: boolean,
    dispatcher: React.Dispatch<React.SetStateAction<boolean>>,
    agencyExpiryDate: string,
} & ( LogoutAgencyProps | DeleteAgencyProps);

type LogoutAgencyProps = {
    type:"LOGOUT"
    agencyId: string;
}

type DeleteAgencyProps = {
    type: 'DELETE';
    agencyId: string;
}

const DeleteAgencyModal : React.FunctionComponent <IDeleteAndLogoutModalProps> =(props) => {
    const {isOpen, dispatcher,} = props;
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const cookie = new Cookies()


    const closeDeleteAndLogoutAgencyModal = ()=>{
        dispatcher(false)
    }
    const deleteAgency = useDeleteAgency({

        cbError: () => {
            setIsLoading(false);
            closeDeleteAndLogoutAgencyModal()
            toast.error("Something went wrong");
        },
        cbSuccess: () => {
            queryClient.invalidateQueries(["agencies"]).then(_ => {
                setIsLoading(false);
                closeDeleteAndLogoutAgencyModal()
                toast.success("Successfully Deleted Agency");
            });
        },
        cb: () => {
            setIsLoading(true);
        },
        agencyId: props.agencyId
    })


    const handleDeleteLogout = () => {
        // dispatcher(true)

         if (props.type === "LOGOUT") {

             cookie.remove('access');
             cookie.remove('user');
             toast.success("Logged Out Successfully!");
             navigate('login', {
                 replace: true
             })
         } else if (props.type === "DELETE") {
             if (props.agencyId) {
                 deleteAgency.mutate({
                     agencyId: props.agencyId,

                 });
                 console.log ("CLicked")
             }

        }
    }




    return(
        <Modal
            isOpen = {isOpen}
    onRequestClose = { closeDeleteAndLogoutAgencyModal }
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
        handleDeleteLogout();

                // closeDeleteAndLogoutAgencyModal()
    }}
>
    Yes
    </StyledYesButton>

    <StyledNoButton onClick={closeDeleteAndLogoutAgencyModal}>
        Cancel
        </StyledNoButton>
        </StyledButtonsContainer>
        </StyledModalContainer>
        </StyledConfirmationModalWrapper>
        </Modal>
)
}
export default DeleteAgencyModal;