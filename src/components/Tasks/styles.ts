import styled from "styled-components";

export const TasksContainer = styled.div`
    width: 52rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
    gap: 1rem;
    align-items: initial;
    background: ${props => props.theme['gray-500']};
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 8px;
    margin-bottom: 1rem;

    p {
        width: 90%;
    }
`

export const CheckPersonalizado = styled.button`
    border: 2px solid ${props => props.theme['blue']};
    border-radius: 9999px;
    background: transparent;
    margin: 0;
    padding: 0;
    width: 15px;
    height: 15px;
`

export const Checked = styled.button`
    border: none;
    border-radius: 9999px;
    background: ${props => props.theme['purple-dark']};
    margin: 0;
    padding: 0;
    width: 15px;
    height: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${props => props.theme['white']};
`

export const TrashButton = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme['gray-300']};
    
    svg {
        &:hover {
            color: ${props => props.theme['danger']};
        }
    }
`