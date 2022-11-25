import styled from "styled-components";

const Wrapper = styled.button`
    width: 60%;
    height: 56px;
    background: #1575A7;
    border: 0px;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    font-family: 'Poppins';
    margin: 4px 0px;
    &:hover {
        cursor: pointer;
    }
`

const Button = ({type="submit", text}) => {
    return ( 
        <Wrapper>
            {text}
        </Wrapper>
     );
}
 
export default Button;