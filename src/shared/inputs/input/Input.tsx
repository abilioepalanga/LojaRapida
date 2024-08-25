import { Input as InputText } from "antd";
import { BoxInput, TitleInput } from "./input.styles";
import { UserOutlined } from "@ant-design/icons";

const Input = () => {
    return (
        <BoxInput>
            <TitleInput>Nome</TitleInput>
            <InputText
                size="large"
                placeholder="Digite o seu nome"
                prefix={<UserOutlined />}
            />
        </BoxInput>
    );
};

export default Input;
