import React, {useState} from "react";
import Modal from "react-modal";
import useAddAgency from "@/hooks/Agency/useAddAgency.ts";
import {toast} from "react-toastify";
import {useQueryClient} from "@tanstack/react-query";
import {
    StyleAgencyModalForm,
    StyleAgencyModalWrapper,
    StyledAddOrUpdateButton,
    StyledCheckbox,
    StyledCheckboxContainer,
    StyledInput,
    StyledLabelInputContainer,
    StyledRemoveButton
} from "@/view/AgencyManagementView/_components/AddAgencyModal/AddAgencyModal.styled.ts";
import useUpdateAgency from "@/hooks/Agency/useUpdateAgency.ts";

type IAddOrUpdateAgencyModalProps = {
    isOpen: boolean,
    dispatcher: React.Dispatch<React.SetStateAction<boolean>>,
    agencyExpiryDate: string,
} & (AddAgencyProps | UpdateAgencyProps  );

type AddAgencyProps = {
    type: 'ADD';
    agencyId: string;
    agencyEmail: string;
    agencyFullName: string
}

type UpdateAgencyProps = {
    type: 'UPDATE';
    agencyId: string;
    agencyEmail: string;
    agencyFullName: string
    agencyExpiryDate: string,
    isAgencyActive: boolean
}

const AddOrUpdateAgencyModal: React.FunctionComponent<IAddOrUpdateAgencyModalProps> = (props) => {
    const {isOpen, dispatcher} = props;
    const queryClient = useQueryClient();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [email, setEmail] = useState(props.agencyEmail || "");
    const [fullName, setFullName] = useState(props.agencyFullName || "");
    const [expiryDate, setExpiryDate] = useState(props.agencyExpiryDate || "");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);

    const closeAddOrUpdateAgencyModal = () => {
        dispatcher(false);
    }

    const addAgency = useAddAgency({
        cbError: () => {
            setIsLoading(false);
            closeAddOrUpdateAgencyModal();
            toast.error("Something went wrong");
        },
        cbSuccess: () => {
            queryClient.invalidateQueries(["agencies"]).then(_ => {
                setIsLoading(false);
                closeAddOrUpdateAgencyModal();
                toast.success("Successfully Added Agency");
            });
        },
        cb: () => {
            setIsLoading(true);
        }
    })

    const updateAgency = useUpdateAgency({
        cbError: () => {
            setIsLoading(false);
            closeAddOrUpdateAgencyModal();
            toast.error("Something went wrong");
        },
        cbSuccess: () => {
            queryClient.invalidateQueries(["agencies"]).then(_ => {
                setIsLoading(false);
                closeAddOrUpdateAgencyModal();
                toast.success("Successfully Updated Agency");
            });
        },
        cb: () => {
            setIsLoading(true);
        },
        agencyId: props.agencyId
    })

    const handleAddOrUpdateAgency = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.type === "ADD") {
            addAgency.mutate({
                email: email,
                fullName: fullName,
                password
            })
        } else if (props.type === "UPDATE") {
            if (props.agencyId) {
                updateAgency.mutate({fullName: fullName, expiryDate: expiryDate, isActive: isActive})
            }
        } else {
            console.log("Agency does not exist")
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={closeAddOrUpdateAgencyModal}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '30px'
                }
            }}
        >
            <StyleAgencyModalWrapper>
                <h1>{props.type === "UPDATE" ? "Update" : "Add"} Agency</h1>
                <StyleAgencyModalForm
                    onSubmit={handleAddOrUpdateAgency}
                >
                    <StyledLabelInputContainer>
                        <label>
                            Email
                        </label>

                        <StyledInput
                            name={"email"}
                            type={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={"Email"}
                            // defaultValue={props.agencyEmail || ""}
                        />
                    </StyledLabelInputContainer>
                    <StyledLabelInputContainer>
                        <label>
                            Full Name
                        </label>

                        <StyledInput
                            name={"fullName"}
                            type={"text"}
                            placeholder={"Full Name"}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            // defaultValue={props.agencyFullName || ""}
                        />
                    </StyledLabelInputContainer>

                    {props.type === "UPDATE" && (
                        <>
                            <StyledLabelInputContainer>
                                <label>
                                    Expiry Date
                                </label>

                                <StyledInput
                                    name={"expiryDate"}
                                    type={"text"}
                                    placeholder={"Expiry Date"}
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    // defaultValue={props.agencyExpiryDate || ""}
                                />
                            </StyledLabelInputContainer>
                            <StyledCheckboxContainer>
                                <label>
                                    Active
                                </label>

                                <StyledCheckbox
                                    name={"isActive"}
                                    type={"checkbox"}
                                    checked={isActive}
                                    onChange={() => setIsActive(!isActive)}
                                    placeholder={"Active"}
                                />
                            </StyledCheckboxContainer>
                        </>
                    )}

                    {/*PASSWORD FIELD*/}
                    {props.type === "ADD" && (
                        <>
                            <StyledLabelInputContainer>
                                <label>
                                    Password
                                </label>

                                <StyledInput
                                    name={"password"}
                                    type={"password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={"Password"}
                                />
                            </StyledLabelInputContainer>
                        </>
                    )}

                    <StyledAddOrUpdateButton
                        type={"submit"}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : `${props.type === "UPDATE" ? "Update" : "Add"} Agency`}
                    </StyledAddOrUpdateButton>
                    <StyledRemoveButton
                        onClick={closeAddOrUpdateAgencyModal}
                    >
                        Close
                    </StyledRemoveButton>
                </StyleAgencyModalForm>
            </StyleAgencyModalWrapper>
        </Modal>
    );
};

export default AddOrUpdateAgencyModal;
