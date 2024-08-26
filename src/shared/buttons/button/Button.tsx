import { ButtonAtd } from "./button.style";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <ButtonAtd onClick={onClick}>{children}</ButtonAtd>;
};
