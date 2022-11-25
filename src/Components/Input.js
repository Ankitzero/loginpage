import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 80%;
    margin: 10px 20px;
`;
const Label = styled.label`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
`;
const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgba(4, 7, 47, 0.4);
    border-radius: 8px;
    margin: 5px 0px;
`;
const Eyesize = styled.i`
    margin: 0px 10px;
    font-size: 20px;
    &:hover {
        cursor: pointer;
    }
`;
const MainInput = styled.input`
    width: 100%;
    height: 56px;
    border: 0px;
    border-radius: 8px;
    padding: 0px 5px;
    font-size: 18px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    color: #737B86;
`;

const Input = ({ label, type, name, placeholder }) => {
    const [state, setState] = useState(false);
    const handlePasswordVisibility = () => {
        setState(state => !state);
    }
    const renderInputType = () => {
        if(type !== "password") 
            return type;
        else {
            if(state) {
                return "text"
            } else {
                return "password"
            }
        }
    }
    return (
        <InputContainer>
            <Label>{label}</Label>
            <WrapperInput>
                <MainInput type={renderInputType()} name={name} placeholder={placeholder} />
                {type === "password" && <Eyesize 
                    className={`far fa-eye${!state ? "-slash" : ""}`} 
                    onClick={handlePasswordVisibility} 
                />}
            </WrapperInput>
        </InputContainer>
    );
}

export default Input;