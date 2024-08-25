import { Button, Flex } from "antd";
import styled from "styled-components";

export const ButtonAtd = styled(Button)`
    width: 320px;
    height: 40px;
    background-color: #bd0c47;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    &:hover {
        background-color: #45a049;
    }
`;
