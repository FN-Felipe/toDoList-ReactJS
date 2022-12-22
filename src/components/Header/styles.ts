import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 12.5rem;
    justify-content: center;
    align-items: center;
    display: flex;
    background: ${props => props.theme['gray-700']};


    img {
        width: 30px;
        margin-right: 1rem;
    }

    h1 {
        font-size: 50px;
    }
`