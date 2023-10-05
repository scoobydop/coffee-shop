import React, { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import {
    StyleUsersModalWrapper,
    StyleUsersModalForm,
    StyledLabelInputContainer,
    StyledInput,
    StyledCheckbox,
    StyledCheckboxContainer,
    StyledAddOrUpdateButton,
    StyledRemoveButton,
} from "@/view/UserManagementView/_components/UpdateUsers/UpdateUsersModal.styled.ts";
import useUpdateUsers from "@/hooks/User/useUpdateUsers.ts";

type IUpdateUserModalProps = {
    isOpen: boolean;
    dispatcher: React.Dispatch<React.SetStateAction<boolean>>;
    agencyExpiryDate: string;
} & UpdateUsersProps;

type UpdateUsersProps = {
    type: 'UPDATE-USERS';
    usersId: string;
    usersCompany: string;
    usersFullName: string;
    usersExpiryDate: string;
    isUsersActive: boolean;
};

const UpdateUsersModal: React.FunctionComponent<IUpdateUserModalProps> = (props) => {
    const { isOpen, dispatcher } = props;
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fullName, setFullName] = useState(props.usersFullName || "");
    const [expiryDate, setExpiryDate] = useState(props.usersExpiryDate || "");
    const [company, setCompany] = useState(props.usersCompany || "");
    const [isActive, setIsActive] = useState<boolean>(true);

    const closeUpdateUsersModal = () => {
        dispatcher(false);
    };

    const updateUsers = useUpdateUsers({
        cbError: () => {
            setIsLoading(false);
            closeUpdateUsersModal();
            toast.error("Something went wrong");
        },
        cbSuccess: () => {
            queryClient.invalidateQueries(["agencies"]).then(() => {
                setIsLoading(false);
                closeUpdateUsersModal();
                toast.success("Successfully Updated Agency");
            });
        },
        cb: () => {
            setIsLoading(true);
        },
        userId: props.usersId,
    });

    const handleUpdateUsers = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (props.type === "UPDATE-USERS") {
            if (props.usersId) {
                updateUsers.mutate({
                    fullName: fullName,
                    expiryDate: expiryDate,
                    isActive: isActive,
                    company: company,
                });
            }
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={closeUpdateUsersModal}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '30px',
                },
            }}
        >
            <StyleUsersModalWrapper>
                <h1>Update Agency</h1>
                <StyleUsersModalForm onSubmit={handleUpdateUsers}>
                    <StyledLabelInputContainer>
                        <label>Full Name</label>

                        <StyledInput
                            name={"fullName"}
                            type={"text"}
                            placeholder={"Full Name"}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </StyledLabelInputContainer>

                    <StyledLabelInputContainer>
                        <label>Expiry Date</label>

                        <StyledInput
                            name={"expiryDate"}
                            type={"text"}
                            placeholder={"Expiry Date"}
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </StyledLabelInputContainer>
                    <StyledCheckboxContainer>
                        <label>Active</label>

                        <StyledCheckbox
                            name={"isActive"}
                            type={"checkbox"}
                            checked={isActive}
                            onChange={() => setIsActive(!isActive)}
                            placeholder={"Active"}
                        />
                    </StyledCheckboxContainer>

                    <StyledAddOrUpdateButton type={"submit"} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Update Users"}
                    </StyledAddOrUpdateButton>
                    <StyledRemoveButton onClick={closeUpdateUsersModal}>
                        Close
                    </StyledRemoveButton>
                </StyleUsersModalForm>
            </StyleUsersModalWrapper>
        </Modal>
    );
};

export default UpdateUsersModal;
