import styled from "styled-components";

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
`;

export const LoginContainer = styled.div`
    background-color: rgba(0, 50, 105, 0.5);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

    border-radius: 10px;
    width: 100%;
    height: 550px;
    max-width: 400px;

    z-index: 0;
    backdrop-filter: blur(5px); /* Aplica um desfoque de 5px */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Borda sutilmente visível */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
