import { Input as InputText } from "antd";
import { BoxInput, TitleInput } from "./input.styles";
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
            <InputText.Password size="large" placeholder="input password" />
        </BoxInput>
    );
};

export default Input;
