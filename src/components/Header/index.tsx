import logo from '../../assets/logo.svg';
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} />
            <h1>to</h1>
            <h1>do</h1>
        </HeaderContainer>
    )
}