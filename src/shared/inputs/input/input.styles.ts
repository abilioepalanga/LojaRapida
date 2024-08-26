import styled from "styled-components";
import { Input as AntdInput } from "antd";

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const TitleInput = styled.h3`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 5px;
    color: white;
`;

export const Title_login = styled.h1`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 1000;
    line-height: 21px;
    font-size: 44px;
    margin-bottom: 5px;
    color: white;
    height: 30px;
`;

export const InputText = styled(AntdInput)`
    max-width: 320px; /* Aqui você define a largura desejada */
    /* Pode definir um valor máximo, se necessário */
    width: 100%;
`;

export const InputText_Pass = styled(AntdInput.Password)`
    max-width: 320px; /* Aqui você define a largura desejada */
    /* Pode definir um valor máximo, se necessário */
    width: 100%;
`;

export const TitleFinal = styled.h4`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 250;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 5px;
    color: white;
`;
