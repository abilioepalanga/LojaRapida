import styled from "styled-components";

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Coloca a imagem atrás do conteúdo */
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh; /* Ocupa toda a altura da viewport */
    overflow: hidden; /* Para garantir que o conteúdo não transborde */
`;

export const LoginContainer = styled.div`
    background-color: rgba(0, 50, 105, 0.5);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    border-radius: 10px;
    width: 100%;
    height: 450px;
    max-width: 400px;
    padding: 20px;
    z-index: 1; /* Garante que o container esteja acima da imagem de fundo */
    backdrop-filter: blur(5px); /* Aplica um desfoque de 5px */
    border: 1px solid rgba(255, 255, 255, 0.3); /* Borda sutilmente visível */

    align-items: center;
    justify-content: center;
`;
