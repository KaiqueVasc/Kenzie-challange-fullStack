import  styled  from "styled-components";

const BackGroundModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background: #363636;
    width: 100vw;
    height: 100vh;
    position: fixed;

    >div {
        background-color: #228B22;
        padding: 25px;
        width: 450px;
        height: 300px;
        border-radius: 15px;
    }
`

export { BackGroundModal}