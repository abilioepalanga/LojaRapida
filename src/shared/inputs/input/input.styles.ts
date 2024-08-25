import styled from "styled-components";
import { Input as AntdInput } from "antd";

export const BoxInput = styled.div``;

export const TitleInput = styled.h3`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 5px;
    color: white;
`;

export const InputText = styled(AntdInput)`
    width: 350px; /* Aqui você define a largura desejada */
    /* Pode definir um valor máximo, se necessário */
`;
