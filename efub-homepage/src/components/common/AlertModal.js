import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 1s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalBlock = styled.div`
    position: relative;
    top: 0px;
    padding: 0 auto;
    border-radius: 10px;  
    background-color: black;
    text-align: center;
    display: flex;
    flex-direction : column;
    align-items: center;
    width: 70%;
    height: 10rem;
    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media(min-width: 769px){
        display: none;
    }
    animation: modal-show 1s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;

const Contents = styled.div`
    width: 90%;
    height: 80%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const AlertModal = ({ _handleModal, children, ...rest }) => {
    // _handleModal로 modal open/close 되는 토글 함수 넣어 주면 됨
    /* style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록 */
    /* ...rest를 사용하여 ModalFrame에게 전달 */
    document.body.style.overflow = "hidden";

    return (
        <Container>
            <Background onClick={_handleModal} />
            <ModalBlock {...rest}>
                <Contents>
                    {children}
                </Contents>
            </ModalBlock>
        </Container>
    );
};

export default AlertModal;
