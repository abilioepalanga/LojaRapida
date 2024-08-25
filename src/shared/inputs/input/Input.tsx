import { BoxInput, TitleInput, InputText } from "./input.styles";

import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";
import { Button, Space } from "antd";

const Input = () => {
    return (
        <BoxInput>
            <TitleInput>Nome</TitleInput>
            <InputText
                size="large"
                placeholder="Digite o seu nome"
                prefix={<UserOutlined />}
            />

            <TitleInput>Senha</TitleInput>
            <InputText.Password
                size="large"
                placeholder="Digite a  sua senha"
            />
        </BoxInput>
    );
};

export default Input;
