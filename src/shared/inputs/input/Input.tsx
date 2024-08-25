import { BoxInput, TitleInput, InputText, Title_login } from "./input.styles";

import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";
import { Button, Space } from "antd";

const Input = () => {
    return (
        <BoxInput>
            <Title_login>Login</Title_login>
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
