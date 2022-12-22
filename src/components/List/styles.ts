import styled from "styled-components";

export const PesquisaContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: -1.5rem;

    textarea {
        width: 46rem;
        height: 56px;
        background: ${props => props.theme['gray-500']};
        font-size: 1rem;
        color: ${props => props.theme['gray-300']};
        border-radius: 8px;
        border: 1px solid ${props => props.theme['gray-700']};
        resize: none;
        display: flex;
        line-height: 54px;
        padding-left: 10px;
    }

    button {
        background: ${props => props.theme['blue-dark']};
        color: ${props => props.theme['white']};
        width: 90px;
        height: 56px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        display: flex;
        gap: 5px;

        &:hover {
            background: ${props => props.theme['blue']};
            transition: 0.2s;
        }
    }
`

export const VoidContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${props => props.theme['gray-400']};
    height: 17rem;
    width: 52rem;

    color: ${props => props.theme['gray-300']};

    img {
        margin-bottom: 2rem;
        width: 50px;
    }

    p {
        font-size: 1rem;
    }
`

export const CowntItens = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    p {
        font-size: 0.875rem;
        font-weight: bold;
    }

    div {
        border-radius: 999999px;
        border: none;
        padding: 0.3rem;
        display: flex;
        min-width: 25px;
        height: 19px;
        color: ${props => props.theme['gray-200']};
        background: ${props => props.theme['gray-400']};
        align-items: center;
        text-align: center;
    }
`

export const CowntContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 52rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
`

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
