import { BackgroundImage } from "../styles/loginScreen.styles";
import { LoginContainer } from "../styles/loginScreen.styles";
import { Container } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
        <Container>
            <BackgroundImage src="./background.png" alt="Fundo" />
            <LoginContainer>{/* Conteúdo do Login */}</LoginContainer>
        </Container>
    );
};

export default LoginScreen;
