import { Input } from "antd";
import { BoxInput, TitleInput } from "./styles";

const InputDefault = () => {
    return (
        <div>
            <Input size="large" placeholder="Digite o seu nome" />
            <BoxInput>
                <TitleInput>Nome</TitleInput>
                <Input size="large" placeholder="Digite o seu nome" />
            </BoxInput>
        </div>
    );
};

export default InputDefault;
