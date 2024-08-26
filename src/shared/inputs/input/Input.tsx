import {
    BoxInput,
    TitleInput,
    InputText,
    Title_login,
    InputText_Pass,
    TitleFinal,
} from "./input.styles";
import { Button } from "../../../shared/buttons/button/Button";
import { useState, ChangeEvent } from "react";
import {
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";

const Input = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value + "@gmail.com");
    };

    // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value);
    // };

    return (
        <BoxInput>
            <Title_login>Login</Title_login>
            <TitleInput>Nome</TitleInput>
            <InputText
                size="large"
                placeholder="Digite o seu nome"
                prefix={<UserOutlined />}
                onChange={handleEmailChange}
                value={email}
            />

            <TitleInput>Senha</TitleInput>
            <InputText_Pass size="large" placeholder="Digite a  sua senha" />
            <Button />
            <TitleFinal> Não tem conta?</TitleFinal>
        </BoxInput>
    );
};

export default Input;
