import { BoxInput, TitleInput, InputText, Title_login } from "./input.styles";
import { Button } from "../../../shared/buttons/button/Button";
import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";

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
            <Button />
        </BoxInput>
    );
};

export default Input;
