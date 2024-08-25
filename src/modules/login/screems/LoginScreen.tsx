import { BackgroundImage } from "../styles/loginScreen.styles";
import { LoginContainer } from "../styles/loginScreen.styles";
import { Container } from "../styles/loginScreen.styles";
import Input from "../../../shared/inputs/input/input";

const LoginScreen = () => {
    return (
        <Container>
            <BackgroundImage src="./background.png" alt="Fundo" />
            <LoginContainer>
                <Input />
            </LoginContainer>
        </Container>
    );
};

export default LoginScreen;
