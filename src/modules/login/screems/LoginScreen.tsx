import { BackgroundImage } from "../styles/loginScreen.styles";
import { LoginContainer } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
        <div>
            <div>
                <BackgroundImage src="./background.png" />
            </div>
            <div>
                <LoginContainer />
            </div>
        </div>
    );
};

export default LoginScreen;
