import React from "react";
import {StyledLoaderSpinner, StyledLoadingBox, StyledLoadingWrapper} from "@/components/Loading/Loading.styled.js";
import Modal from "react-modal";



const Loading: React.FunctionComponent<ILoadingProps> d= ({title, description}) => {

    return (
        <Modal
            isOpen = {true}
            ariaHideApp={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border : 'none',
                }
            }}>
        <StyledLoadingWrapper>
            <StyledLoadingBox>

                <h1>{title}...</h1>
                {description && (
                    <p>{description}</p>
                )}
            <StyledLoaderSpinner/>
            </StyledLoadingBox>

        </StyledLoadingWrapper>
        </Modal>
    );
};

export default Loading
