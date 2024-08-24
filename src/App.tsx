import { useState } from "react";
//import styled from "styled-components";
import LoginScreen from "./modules/login";

function App() {
    const [count, setCount] = useState(0);

    return <LoginScreen />;
}

export default App;
